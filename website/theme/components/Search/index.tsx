import { IconSearch } from '@arco-design/web-react/icon';
import { createPortal, useLocaleSiteData } from '@rspress/core/runtime';
import type { DefaultMatchResultItem, HighlightInfo } from '@rspress/core/theme';
import { useFullTextSearch } from '@rspress/core/theme';
import { AnimatePresence, motion, useInView } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { getSlicedStrByByteLength } from './utils';
import './index.less';

interface AnimatedResultProps {
  children: React.ReactNode;
  delay?: number;
  isSelected: boolean;
  dataIndex: number;
  onClick: () => void;
}

const AnimatedResult = ({
  children,
  delay = 0,
  dataIndex,
  isSelected,
  onClick,
}: AnimatedResultProps) => {
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <motion.div
      ref={ref}
      data-index={dataIndex}
      className={isSelected ? 'result-item selected' : 'result-item'}
      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.7, opacity: 0 }}
      transition={{ duration: 0.2, delay }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

const Search = () => {
  const [metaKey, setMetaKey] = useState<null | string>(null);
  const [focused, setFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [results, setResults] = useState<DefaultMatchResultItem[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const { initialized, search } = useFullTextSearch();
  const { searchPlaceholderText = 'Search docs' } = useLocaleSiteData();
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    setMetaKey(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? '⌘' : 'Ctrl');
  }, []);

  useEffect(() => {
    if (focused) {
      document.body.classList.add('search--active');
    } else {
      document.body.classList.remove('search--active');
    }
  }, [focused]);

  useEffect(() => {
    if (!initialized) {
      return;
    }
    const t = setTimeout(async () => {
      const res = await search(inputValue);
      console.log(res);
      if (res.length > 0) {
        setResults(res[0].result as DefaultMatchResultItem[]);
        setSelectedIndex(-1);
      } else {
        setResults([]);
      }
    }, 300);
    return () => clearTimeout(t);
  }, [inputValue]);

  const clearSearchState = () => {
    setFocused(false);
    setInputValue('');
    setResults([]);
    setSelectedIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      clearSearchState();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => Math.max(prev - 1, -1));
    } else if (e.key === 'Enter' && selectedIndex >= 0) {
      e.preventDefault();
      handleResultClick(results[selectedIndex]);
    }
  };

  const handleResultClick = (result: DefaultMatchResultItem) => {
    window.location.href = result.link;
    clearSearchState();
  };

  // 键盘快捷键监听
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setFocused(true);
      }
    };

    document.addEventListener('keydown', handleGlobalKeyDown);
    return () => document.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  const highlightText = (text: string, highlights: HighlightInfo[]) => {
    const fragmentList = [];
    let lastIndex = 0;
    for (const highlightInfo of highlights) {
      const { start, length } = highlightInfo;
      const prefix = text.slice(lastIndex, start);
      const queryStr = getSlicedStrByByteLength(text, start, length);
      fragmentList.push(prefix);
      fragmentList.push(<mark key={start}>{queryStr}</mark>);
      lastIndex = start + queryStr.length;
    }

    if (lastIndex < text.length) {
      fragmentList.push(text.slice(lastIndex));
    }

    return fragmentList;
  };

  const renderResultItem = (item: DefaultMatchResultItem) => {
    const { type, highlightInfoList, title, header, statement = '' } = item;

    const renderText = (text: string, textType: string) => {
      return type === textType ? highlightText(text, highlightInfoList) : text;
    };
    return (
      <>
        <div className="result-title">{renderText(title, 'title')}</div>
        <div className="result-header">{renderText(header, 'header')}</div>
        <div className="result-content">{renderText(statement, 'content')}</div>
      </>
    );
  };

  return (
    <>
      <button className="search-button" type="button" onClick={() => setFocused(true)}>
        <IconSearch />
        <div className="word">Search Docs</div>
        <kbd className="kbd">{metaKey}K</kbd>
      </button>
      {focused &&
        createPortal(
          <div className="search-mask" onClick={clearSearchState}>
            <div
              className="search-modal"
              onClick={(e) => {
                setFocused(true);
                e.stopPropagation();
              }}
            >
              <div className="search-input">
                <IconSearch className="icon" />
                <input
                  ref={searchInputRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={searchPlaceholderText}
                  aria-label="SearchPanelInput"
                  autoComplete="off"
                  autoFocus
                />
              </div>
              <AnimatePresence>
                <motion.div
                  key="res"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ overflow: 'hidden' }}
                >
                  <div className="results-container">
                    {results.length > 0 ? (
                      results.map((item, i) => {
                        return (
                          <AnimatedResult
                            key={`${item.link}-${i}`}
                            delay={0.05}
                            dataIndex={i}
                            isSelected={selectedIndex === i}
                            onClick={() => handleResultClick(item)}
                          >
                            {renderResultItem(item)}
                          </AnimatedResult>
                        );
                      })
                    ) : inputValue ? (
                      <div className="search-result-item no-result">
                        <div className="no-result-text">未找到相关结果</div>
                        <div className="no-result-suggestion">尝试使用不同的关键词或检查拼写</div>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>,
          document.getElementById('search-container'),
        )}
    </>
  );
};

export default Search;
