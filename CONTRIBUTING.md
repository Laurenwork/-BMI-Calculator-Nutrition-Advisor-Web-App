# Contributing Guide

Thank you for your interest in contributing to the BMI Calculator React application! This guide will help you get started.

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Git
- Basic knowledge of React and TypeScript

### Development Setup

1. **Fork the repository**
2. **Clone your fork:**
```bash
git clone https://github.com/your-username/bmi-calculator-react.git
cd bmi-calculator-react
```

3. **Install dependencies:**
```bash
npm install
```

4. **Start development server:**
```bash
npm start
```

## Contribution Guidelines

### Code Style

- Follow the existing code style
- Use TypeScript for all new code
- Use functional components with hooks
- Use CSS Modules for styling
- Write meaningful commit messages

### Commit Message Format

Use conventional commits:

```
type(scope): description

Examples:
feat: add new BMI category
fix: resolve input validation issue
docs: update README
style: format code
refactor: improve BMI calculation
test: add unit tests for validation
```

### Pull Request Process

1. **Create a feature branch:**
```bash
git checkout -b feature/your-feature-name
```

2. **Make your changes:**
   - Write clean, readable code
   - Add tests for new functionality
   - Update documentation if needed

3. **Test your changes:**
```bash
npm test
npm run lint
npm run build
```

4. **Commit your changes:**
```bash
git add .
git commit -m "feat: add your feature"
```

5. **Push to your fork:**
```bash
git push origin feature/your-feature-name
```

6. **Create a Pull Request:**
   - Provide a clear description
   - Reference any related issues
   - Include screenshots if applicable

## Development Workflow

### Branch Naming

- `feature/description` - New features
- `fix/description` - Bug fixes
- `docs/description` - Documentation updates
- `refactor/description` - Code refactoring
- `test/description` - Test improvements

### Testing

All new code must include tests:

```typescript
// Example test
describe('NewFeature', () => {
  test('should work correctly', () => {
    const result = newFeature();
    expect(result).toBe(expected);
  });
});
```

### Code Review

- All PRs require review
- Address feedback promptly
- Keep PRs focused and small
- Update documentation as needed

## Areas for Contribution

### 🐛 Bug Fixes

- Fix validation issues
- Resolve styling problems
- Fix accessibility issues
- Improve error handling

### ✨ New Features

- Additional BMI categories
- New exercise recommendations
- Export functionality
- Dark/light mode toggle
- Multi-language support

### 🎨 UI/UX Improvements

- Better responsive design
- Improved animations
- Enhanced accessibility
- Better mobile experience

### 📚 Documentation

- Improve README
- Add code examples
- Create tutorials
- Update API documentation

### 🧪 Testing

- Increase test coverage
- Add integration tests
- Add E2E tests
- Performance testing

### 🔧 Development Tools

- ESLint rules
- Prettier configuration
- GitHub Actions
- Docker improvements

## Code Standards

### TypeScript

```typescript
// Good
interface UserInput {
  height: number;
  weight: number;
  gender: 'pria' | 'wanita' | 'lainnya';
}

// Bad
const userInput: any = {};
```

### React Components

```typescript
// Good
interface ComponentProps {
  onSubmit: (data: UserInput) => void;
}

const Component: React.FC<ComponentProps> = ({ onSubmit }) => {
  // Implementation
};

// Bad
const Component = (props: any) => {
  // Implementation
};
```

### CSS Modules

```css
/* Good */
.inputSection {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 12px;
}

/* Bad */
.input-section {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 12px;
}
```

## Testing Guidelines

### Unit Tests

- Test utility functions
- Test component behavior
- Test error handling
- Aim for 80%+ coverage

### Integration Tests

- Test component interactions
- Test form submissions
- Test API calls

### E2E Tests

- Test user workflows
- Test responsive design
- Test accessibility

## Documentation

### Code Documentation

- Use JSDoc for functions
- Document complex logic
- Include examples
- Keep comments up-to-date

### README Updates

- Update installation instructions
- Add new features
- Update screenshots
- Keep examples current

## Issue Reporting

### Bug Reports

When reporting bugs, include:

- Clear description
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots if applicable
- Browser/OS information

### Feature Requests

When requesting features:

- Clear description
- Use case explanation
- Proposed solution
- Alternatives considered
- Additional context

## Release Process

### Versioning

We use semantic versioning:

- `MAJOR.MINOR.PATCH`
- Major: Breaking changes
- Minor: New features
- Patch: Bug fixes

### Release Checklist

- [ ] All tests passing
- [ ] Documentation updated
- [ ] Version bumped
- [ ] Changelog updated
- [ ] Build successful
- [ ] Performance audit

## Community Guidelines

### Be Respectful

- Use welcoming language
- Be respectful of differing viewpoints
- Accept constructive criticism
- Focus on what's best for the community

### Be Constructive

- Provide helpful feedback
- Suggest improvements
- Share knowledge
- Help others learn

### Be Professional

- Keep discussions on-topic
- Use appropriate language
- Follow the code of conduct
- Report inappropriate behavior

## Getting Help

### Resources

- Check existing issues
- Read documentation
- Ask in discussions
- Join community chat

### Contact

- GitHub Issues for bugs
- GitHub Discussions for questions
- Pull Requests for contributions

## Recognition

Contributors will be recognized in:

- README contributors section
- Release notes
- Project documentation
- Community highlights

Thank you for contributing to the BMI Calculator React application! 🎉

