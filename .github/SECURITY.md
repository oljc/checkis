# Security Policy

Checkis takes security issues very seriously. As a widely used JavaScript/TypeScript type checking utility library, we are committed to ensuring the security of our project and appreciate security researchers and users helping us keep the project secure.

## 🚨 Reporting Security Vulnerabilities

### 📧 Private Reporting (Recommended)

If you discover a security vulnerability, please **do not** report it through public GitHub Issues. Please report privately through the following methods:

- **Email**: ljc.byte@gmail.com
- **Subject**: `[SECURITY] Checkis - Security Vulnerability Report`
- **GitHub Security**: [Private Security Report](https://github.com/oljc/checkis/security/advisories/new)

### 📝 Report Content

Please include the following information in your report:

```markdown
**Vulnerability Type**: (e.g., prototype pollution, type bypass, logic error, etc.)
**Affected Versions**: (range of affected versions)
**Severity**: (Low/Medium/High/Critical)
**Vulnerability Description**: (detailed description of the vulnerability)
**Reproduction Steps**: 
1. Step one
2. Step two
3. ...

**Proof of Concept**: (PoC code or test cases, if available)
**Suggested Fix**: (fix suggestions, if available)
**Reporter Information**: (name/organization, for acknowledgment)
```

### ⏰ Response Time Commitment

| Vulnerability Severity | Initial Response | Status Updates | Fix Release |
|----------------------|------------------|----------------|-------------|
| 🔴 **Critical** | Within 24 hours | Every 72 hours | Within 7 days |
| 🟠 **High** | Within 72 hours | Weekly | Within 30 days |
| 🟡 **Medium** | Within 7 days | Bi-weekly | Within 90 days |
| 🟢 **Low** | Within 14 days | Monthly | Next version |

## 🛡️ Security Best Practices

### For Users

When using Checkis, please follow these security recommendations:

#### 🔍 Type Checking Security
- Do not rely on type checking functions for security validation; they are primarily for type determination
- When handling user input, combine with appropriate input validation and sanitization
- Avoid using type checking results directly for security decisions

#### 📦 Dependency Management
- Regularly update Checkis to the latest version
- Use `npm audit` or `pnpm audit` to check for dependency vulnerabilities
- Lock version numbers in production environments

#### 🧪 Testing Validation
- Write comprehensive tests for your type checking logic
- Test edge cases and exceptional inputs
- Verify that type checking functions behave as expected

### For Developers

#### 🔒 Secure Development
- Follow JavaScript/TypeScript secure coding standards
- Be aware of prototype pollution and type confusion attacks
- Avoid performing unsafe operations in type checking functions
- Ensure accuracy and reliability of type guard functions

#### 🔍 Code Review
- All code changes must undergo security review
- Regularly perform dependency vulnerability scanning
- Ensure new type checking functions do not introduce security risks

#### 🧪 Test Coverage
- Maintain high test coverage (target >95%)
- Include tests for edge cases and exceptional inputs
- Use fuzz testing to verify function robustness

## 🎯 Common Security Considerations

### Type Checking Library Specific Risks

- **Prototype Pollution**: Ensure type checking is not affected by maliciously modified prototype chains
- **Type Confusion**: Prevent attackers from bypassing type checks through specially crafted objects
- **Performance Attacks**: Avoid complex inputs that could cause performance issues
- **Logic Errors**: Ensure correctness of type checking function logic

## 🏆 Vulnerability Disclosure

We follow a coordinated vulnerability disclosure process:

### 📅 Disclosure Timeline

1. **T+0**: Vulnerability report received
2. **T+1-3**: Confirm vulnerability and begin investigation
3. **T+7-30**: Develop and test fix
4. **T+30-90**: Release security update
5. **T+90**: Public disclosure of vulnerability details (negotiable extension)

### 🎖️ Acknowledgment Policy

We will acknowledge security researchers in the following locations:

- Project Security Hall of Fame
- Acknowledgment section in security advisories
- Special thanks in Release Notes

> **Note**: Only researchers who follow the responsible disclosure process will be publicly acknowledged.

## 📄 Legal Statement

### 🛡️ Security Research Authorization

Under the terms of this policy, we authorize security researchers to:

- Conduct security testing and code review of the project
- Create test cases to verify potential vulnerabilities
- Perform responsible vulnerability disclosure

### ⚖️ Legal Protection

We commit not to take legal action against security research activities that comply with this policy, including:

- Good faith security research and code analysis
- Responsible vulnerability disclosure
- Behavior that follows the disclosure timeline

### 🚫 Prohibited Activities

The following activities are not within the scope of authorization:

- Denial of Service attacks (DoS/DDoS)
- Malicious destruction or tampering with the project
- Unauthorized access to others' systems
- Social engineering attacks
- Activities that violate relevant laws and regulations

---

**Contact**: ljc.byte@gmail.com  
**Project Homepage**: https://checkis.cn  
**GitHub**: https://github.com/oljc/checkis

-------

# 安全政策

Checkis 非常重视安全问题。作为一个广泛使用的 JavaScript/TypeScript 类型检查工具库，我们致力于确保项目的安全性，并感谢安全研究人员和用户帮助我们保持项目安全。

## 🚨 报告安全漏洞

### 📧 私密报告（推荐）

如果您发现了安全漏洞，请**不要**通过公开的 GitHub Issues 报告。请通过以下方式私密报告：

- **邮箱**: ljc.byte@gmail.com
- **主题**: `[SECURITY] Checkis - 安全漏洞报告`
- **GitHub Security**: [私密安全报告](https://github.com/oljc/checkis/security/advisories/new)

### 📝 报告内容

请在报告中包含以下信息：

```markdown
**漏洞类型**: (如：原型污染、类型绕过、逻辑错误等)
**影响版本**: (受影响的版本范围)
**严重程度**: (低/中/高/严重)
**漏洞描述**: (详细描述漏洞)
**复现步骤**: 
1. 步骤一
2. 步骤二
3. ...

**概念验证**: (PoC代码或测试用例，如有)
**建议修复**: (修复建议，如有)
**发现者信息**: (姓名/组织，用于致谢)
```

### ⏰ 响应时间承诺

| 漏洞严重程度 | 首次响应 | 状态更新 | 修复发布 |
|-------------|----------|----------|----------|
| 🔴 **严重** | 24小时内 | 每72小时 | 7天内 |
| 🟠 **高危** | 72小时内 | 每周 | 30天内 |
| 🟡 **中危** | 7天内 | 每两周 | 90天内 |
| 🟢 **低危** | 14天内 | 每月 | 下个版本 |

## 🛡️ 安全最佳实践

### 对于用户

在使用 Checkis 时，请遵循以下安全建议：

#### 🔍 类型检查安全
- 不要依赖类型检查函数进行安全验证，它们主要用于类型判断
- 在处理用户输入时，结合适当的输入验证和清理
- 避免将类型检查结果直接用于安全决策

#### 📦 依赖管理
- 定期更新 Checkis 到最新版本
- 使用 `npm audit` 或 `pnpm audit` 检查依赖漏洞
- 在生产环境中锁定版本号

#### 🧪 测试验证
- 为您的类型检查逻辑编写充分的测试
- 测试边界情况和异常输入
- 验证类型检查函数的行为符合预期

### 对于开发者

#### 🔒 安全开发
- 遵循 JavaScript/TypeScript 安全编码规范
- 注意原型污染和类型混淆攻击
- 避免在类型检查函数中执行不安全的操作
- 确保类型守卫函数的准确性和可靠性

#### 🔍 代码审查
- 所有代码更改必须经过安全审查
- 定期进行依赖漏洞扫描
- 确保新增的类型检查函数不会引入安全风险

#### 🧪 测试覆盖
- 维护高测试覆盖率（目标 >95%）
- 包含边界情况和异常输入的测试
- 使用模糊测试验证函数健壮性

## 🎯 常见安全考虑

### 类型检查库特有风险

- **原型污染**: 确保类型检查不会被恶意修改的原型链影响
- **类型混淆**: 防止攻击者通过特殊构造的对象绕过类型检查
- **性能攻击**: 避免可能导致性能问题的复杂输入
- **逻辑错误**: 确保类型检查函数的逻辑正确性

## 🏆 漏洞披露

我们采用协调的漏洞披露流程：

### 📅 披露时间线

1. **T+0**: 收到漏洞报告
2. **T+1-3**: 确认漏洞并开始调查
3. **T+7-30**: 开发并测试修复方案
4. **T+30-90**: 发布安全更新
5. **T+90**: 公开披露漏洞详情（可协商延长）

### 🎖️ 致谢政策

我们将在以下位置致谢安全研究者：

- 项目 Security Hall of Fame
- 安全公告中的致谢部分
- Release Notes 中的特别感谢

> **注意**: 只有遵循负责任披露流程的研究者才会被公开致谢。

## 📄 法律声明

### 🛡️ 安全研究授权

在遵循本政策的前提下，我们授权安全研究人员：

- 对项目进行安全测试和代码审查
- 创建测试用例验证潜在漏洞
- 进行负责任的漏洞披露

### ⚖️ 法律保护

我们承诺不会对遵循本政策的安全研究活动采取法律行动，包括：

- 善意的安全研究和代码分析
- 负责任的漏洞披露
- 遵循披露时间线的行为

### 🚫 禁止行为

以下行为不在授权范围内：

- 拒绝服务攻击 (DoS/DDoS)
- 恶意破坏或篡改项目
- 未经授权访问他人系统
- 社会工程学攻击
- 违反相关法律法规的行为

---

**联系方式**: ljc.byte@gmail.com  
**项目主页**: https://checkis.cn  
**GitHub**: https://github.com/oljc/checkis