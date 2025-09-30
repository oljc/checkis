import { ShinyText } from '@/components/shiny-text';

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const lang = (await params).lang;

  const content = {
    en: {
      title: 'Checkis',
      cta: 'View Documentation',
    },
    zh: {
      title: 'Checkis',
      cta: '查看文档',
    },
  };

  const t = content[lang as keyof typeof content] || content.en;

  return (
    <main className="text-center px-6">
      <section className="flex flex-col justify-center items-center h-[90dvh] gap-6">
        <ShinyText>🎉 Introducing isEmail</ShinyText>
        <h1 className="text-black dark:text-white relative mx-0 max-w-[43.5rem] pt-5 md:mx-auto md:px-4 md:py-2 text-left font-semibold tracking-tighter text-balance md:text-center text-5xl sm:text-7xl md:text-7xl lg:text-7xl">
          {t.title}
        </h1>
      </section>
      <section>
        <h2>Our Sponsors</h2>
      </section>
    </main>
  );
}
