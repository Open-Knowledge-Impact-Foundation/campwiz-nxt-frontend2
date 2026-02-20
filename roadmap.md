# CampWiz Frontend Migration Roadmap

## Overview
This document outlines the migration strategy from the Next.js-based Frontend to the Vite/React-based Frontend2 application.

---

## Current State Analysis

### Frontend (Next.js - Legacy)
- **Framework**: Next.js 14+ with App Router
- **Features**:
  - Server-side rendering (SSR)
  - API routes for backend proxying
  - Server actions for authentication
  - Complex middleware for authorization
  - Material-UI with theme support
  - i18n with server-side translation
  - Multi-language support (50+ languages)
  - Sentry integration for error tracking

### Frontend2 (Vite/React - Target)
- **Framework**: Vite + React + TypeScript
- **Current Status**: ✅ Core setup complete
- **Completed Features**:
  - ✅ Login page with dark mode
  - ✅ OAuth callback routes (public)
  - ✅ Material-UI theming
  - ✅ i18n client-side translation
  - ✅ Session management (basic)
  - ✅ Policy pages (Privacy, Terms)
  - ✅ React Router setup

---

## Migration Goals

### Primary Objectives
1. **Performance**: Faster initial load times with Vite's optimized bundling
2. **Simplicity**: Eliminate SSR complexity where not needed
3. **Developer Experience**: Hot module replacement and faster builds
4. **Maintainability**: Cleaner separation of concerns
5. **Modern Stack**: Latest React patterns and tooling

### Non-Goals
- Backend changes (keep existing Go API)
- Database schema changes
- Business logic modifications

---

## Migration Phases

### ✅ Phase 1: Foundation (COMPLETED)
**Status**: Done
- [x] Project setup with Vite + React + TypeScript
- [x] Material-UI integration with dark mode support
- [x] i18n setup with multi-language support
- [x] Basic routing with React Router
- [x] Login page with OAuth2 flow
- [x] Public callback routes (`/user/callback`, `/user/callback/write`)
- [x] Session provider skeleton
- [x] Policy pages (Terms, Privacy)

### 🔄 Phase 2: Authentication & Authorization (IN PROGRESS)
**Priority**: High | **Estimated Duration**: 1-2 weeks

#### Tasks
- [ ] Complete session management
  - [ ] Session refresh logic
  - [ ] Token expiry handling
  - [ ] Automatic session restoration
  - [ ] Logout functionality
- [ ] Protected route wrapper
  - [ ] Permission-based access control
  - [ ] Role checking (Admin, Organizer, Jury, etc.)
  - [ ] Redirect to login for unauthorized access
- [ ] User profile management
  - [ ] Fetch user data
  - [ ] Display user info
  - [ ] User preferences
- [ ] Error boundaries for auth failures

**Dependencies**: 
- Backend API: `/api/v2/user/session` (already exists)
- Backend API: `/api/v2/user/logout` (already exists)

---

### 📋 Phase 3: Core Pages (NOT STARTED)
**Priority**: High | **Estimated Duration**: 3-4 weeks

#### 3.1 Home/Landing Page
- [ ] Hero banner component
- [ ] Campaign list/grid view
- [ ] Search and filter functionality
- [ ] Dashboard link (for authenticated users)

#### 3.2 Project Pages
- [ ] Project listing (`/project`)
- [ ] Project details view (`/project/[projectId]`)
- [ ] Project creation form (`/project/new`)
- [ ] Project editing (`/project/[projectId]/edit`)

#### 3.3 Campaign Pages
- [ ] Campaign listing (`/campaign`)
- [ ] Campaign details (`/campaign/[campaignId]`)
- [ ] Campaign creation (`/campaign/[campaignId]/new`)
- [ ] Campaign editing (`/campaign/[campaignId]/edit`)
- [ ] Campaign categorizer (`/campaign/[campaignId]/categorizer`)

#### 3.4 Round Pages
- [ ] Round listing (`/campaign/[campaignId]/round`)
- [ ] Round details
- [ ] Round creation
- [ ] Round statistics view

**Dependencies**:
- API endpoints: All existing backend endpoints
- Components: Tables, forms, dialogs, charts

---

### 📝 Phase 4: Submission & Evaluation (NOT STARTED)
**Priority**: High | **Estimated Duration**: 2-3 weeks

#### Tasks
- [ ] Submission listing (`/submission`)
- [ ] Submission details (`/submission/[submissionId]`)
- [ ] Submission evaluation form (`/submission/[submissionId]/evaluation`)
- [ ] Evaluation details view
- [ ] Round-specific submission views
  - [ ] Evaluate page (`/round/[roundId]/submission/evaluate`)
  - [ ] Evaluated submissions (`/round/[roundId]/submission/evaluated`)
  - [ ] Pagination support
- [ ] Media viewer/gallery integration
- [ ] Commons API integration for file metadata

**Dependencies**:
- Commons API integration
- Media viewer component
- Form validation
- Image optimization

---

### 🧩 Phase 5: Shared Components (ONGOING)
**Priority**: Medium | **Estimated Duration**: Throughout migration

#### Component Library
- [x] LoadingPopup
- [x] Logo
- [x] LottieWrapper
- [ ] DataTable with sorting/filtering
- [ ] Form components
  - [ ] DatePicker
  - [ ] Select/Autocomplete
  - [ ] File upload
  - [ ] Rich text editor
- [ ] Dialog/Modal components
- [ ] Notification/Snackbar system
- [ ] Error boundaries
- [ ] Image gallery/viewer
- [ ] Chart components for statistics
- [ ] User avatar component
- [ ] Badge/chip components
- [ ] Navigation components
  - [ ] Header/AppBar
  - [ ] Footer
  - [ ] Sidebar/Drawer
  - [ ] Breadcrumbs

#### Hooks
- [ ] `useSession` - Session management
- [ ] `usePermission` - Permission checking
- [ ] `useAPI` - API calls with loading/error states
- [ ] `useDebounce` - Debounced values
- [ ] `useLocalStorage` - Persistent local storage
- [ ] `useMediaQuery` - Responsive breakpoints
- [ ] `useInfiniteScroll` - Pagination helper

---

### 🔧 Phase 6: Advanced Features (NOT STARTED)
**Priority**: Medium | **Estimated Duration**: 2-3 weeks

#### Tasks
- [ ] Advanced search functionality
- [ ] Bulk operations
- [ ] Export functionality (CSV, JSON)
- [ ] Real-time updates (if applicable)
- [ ] Notification system
- [ ] User preferences/settings page
- [ ] Admin panel features
- [ ] Task management integration
- [ ] Statistics dashboards
- [ ] Report generation

---

### 🧪 Phase 7: Testing & Quality Assurance (ONGOING)
**Priority**: High | **Estimated Duration**: Throughout + 2 weeks final

#### Testing Strategy
- [ ] Unit tests
  - [ ] Component tests with React Testing Library
  - [ ] Hook tests
  - [ ] Utility function tests
- [ ] Integration tests
  - [ ] User flow tests
  - [ ] API integration tests
- [ ] E2E tests
  - [ ] Critical user journeys
  - [ ] Authentication flow
  - [ ] Submission/evaluation flow
- [ ] Performance testing
  - [ ] Lighthouse scores
  - [ ] Bundle size analysis
  - [ ] Loading time benchmarks
- [ ] Accessibility testing
  - [ ] WCAG compliance
  - [ ] Screen reader testing
  - [ ] Keyboard navigation
- [ ] Cross-browser testing
  - [ ] Chrome, Firefox, Safari, Edge
  - [ ] Mobile browsers
- [ ] Visual regression testing

**Tools**:
- Vitest for unit/integration tests
- Playwright or Cypress for E2E
- Lighthouse CI for performance
- axe-core for accessibility

---

### 🚀 Phase 8: Deployment & Migration (NOT STARTED)
**Priority**: High | **Estimated Duration**: 1 week

#### Pre-Deployment
- [ ] Environment configuration
  - [ ] Production API URLs
  - [ ] OAuth callback URLs
  - [ ] Sentry configuration
  - [ ] Analytics setup
- [ ] Build optimization
  - [ ] Code splitting
  - [ ] Tree shaking verification
  - [ ] Asset optimization
- [ ] Security audit
  - [ ] Dependency vulnerabilities check
  - [ ] XSS prevention verification
  - [ ] CSRF protection
  - [ ] Content Security Policy

#### Deployment Strategy
- [ ] Beta deployment (parallel with Frontend)
  - [ ] Deploy to `/beta` or `beta.campwiz.toolforge.org`
  - [ ] Limited user testing
  - [ ] Gather feedback
- [ ] Gradual rollout
  - [ ] A/B testing (10% → 50% → 100%)
  - [ ] Monitor error rates
  - [ ] Monitor performance metrics
- [ ] Full migration
  - [ ] Redirect old Frontend to Frontend2
  - [ ] Update DNS/routing
  - [ ] Archive old Frontend codebase
- [ ] Post-migration monitoring
  - [ ] Error tracking (Sentry)
  - [ ] Performance monitoring
  - [ ] User feedback collection

---

## Technical Considerations

### API Integration
- **Base URL Management**
  - Development: `http://localhost:8000`
  - Production: `https://campwiz.toolforge.org`
  - Configure via environment variables
- **Authentication**
  - Session cookies managed by backend
  - Token refresh on expiry
  - CORS configuration required
- **Error Handling**
  - Standardized error responses
  - User-friendly error messages
  - Retry logic for transient failures

### State Management
- **Options**:
  1. Context API (current choice for session)
  2. Zustand (lightweight alternative)
  3. TanStack Query (for server state)
- **Decision**: Use Context API + TanStack Query
  - Context for global app state (session, theme)
  - TanStack Query for server state (data fetching)

### Routing Strategy
- **React Router v6**
  - File-based routing not needed (unlike Next.js)
  - Centralized route configuration
  - Lazy loading for code splitting
  - Protected route wrappers

### Styling
- **Material-UI v5**
  - Theme customization (dark/light mode)
  - Consistent with existing design
  - Responsive design utilities
- **CSS Modules** or **Styled Components** for custom styles

### Internationalization (i18n)
- **Current**: react-i18next
- **Translation Management**
  - Reuse existing translation files from Frontend
  - OrganizationTranslateWiki for contributions
  - Automatic language detection
  - Fallback to English

---

## Data Migration

### No Database Changes Required
- All data remains in existing MySQL database
- Backend API unchanged
- Frontend only consumes existing APIs

### Session Migration
- Existing sessions remain valid
- Cookies shared between old and new frontend (same domain)
- Seamless user experience

---

## Performance Targets

### Metrics
- **Initial Load**: < 2 seconds
- **Time to Interactive**: < 3 seconds
- **Lighthouse Score**: > 90
- **Bundle Size**: < 500KB (gzipped)
- **API Response Time**: < 200ms (average)

### Optimization Strategies
- Code splitting by route
- Lazy loading components
- Image optimization (WebP, lazy loading)
- Caching strategy (service workers or CDN)
- Minimize third-party scripts

---

## Risk Assessment & Mitigation

### High Risk Areas
1. **Authentication Flow**
   - **Risk**: Session management issues, OAuth errors
   - **Mitigation**: Thorough testing, fallback mechanisms, clear error messages

2. **Data Integrity**
   - **Risk**: Data display inconsistencies
   - **Mitigation**: Comprehensive API integration tests, data validation

3. **User Experience**
   - **Risk**: Different behavior from old frontend
   - **Mitigation**: Beta testing, user feedback, documentation

4. **Performance Regression**
   - **Risk**: Slower than expected performance
   - **Mitigation**: Continuous monitoring, performance budgets

### Medium Risk Areas
1. **Browser Compatibility**
   - **Risk**: Issues in older browsers
   - **Mitigation**: Polyfills, transpilation, browser testing

2. **Accessibility**
   - **Risk**: WCAG violations
   - **Mitigation**: a11y audits, screen reader testing

3. **i18n Completeness**
   - **Risk**: Missing translations
   - **Mitigation**: Translation completeness check, fallbacks

---

## Success Criteria

### Must Have
- [ ] All critical user flows work (login, submission, evaluation)
- [ ] Authentication & authorization work correctly
- [ ] All existing features available
- [ ] No data loss or corruption
- [ ] Performance meets or exceeds targets
- [ ] Accessibility standards met (WCAG 2.1 AA)

### Nice to Have
- [ ] Improved UX compared to old frontend
- [ ] Additional features (e.g., better search, filters)
- [ ] Better mobile experience
- [ ] Offline support (PWA)

---

## Timeline

### Estimated Total Duration: 10-14 weeks

| Phase | Duration | Status | Target Date |
|-------|----------|--------|-------------|
| Phase 1: Foundation | 1 week | ✅ Completed | Feb 2026 |
| Phase 2: Auth & Authorization | 1-2 weeks | 🔄 In Progress | Mar 2026 |
| Phase 3: Core Pages | 3-4 weeks | 📋 Planned | Apr 2026 |
| Phase 4: Submission & Evaluation | 2-3 weeks | 📋 Planned | May 2026 |
| Phase 5: Components | Ongoing | 🔄 Ongoing | Throughout |
| Phase 6: Advanced Features | 2-3 weeks | 📋 Planned | Jun 2026 |
| Phase 7: Testing & QA | 2 weeks | 🔄 Ongoing | Jul 2026 |
| Phase 8: Deployment | 1 week | 📋 Planned | Jul 2026 |

**Note**: Timeline is flexible and may adjust based on complexity and feedback.

---

## Resources & Documentation

### Key Documentation
- [Next.js Frontend README](/Frontend/README.md)
- [Backend API Documentation](/Backend/docs/)
- [Wikimedia OAuth Documentation](https://www.mediawiki.org/wiki/OAuth)
- [Material-UI Documentation](https://mui.com/)
- [Vite Documentation](https://vitejs.dev/)
- [React Router Documentation](https://reactrouter.com/)

### Team Contacts
- Backend API: See Backend team
- Translation: TranslateWiki community
- Design: See design guidelines

### External Dependencies
- Wikimedia Commons API
- Wikimedia OAuth2 provider
- TranslateWiki for translations
- Sentry for error tracking
- Toolforge for hosting

---

## Post-Migration Plan

### Maintenance
- Regular dependency updates
- Security patches
- Performance monitoring
- User feedback collection

### Future Enhancements
- Mobile app (React Native)
- Progressive Web App (PWA) features
- Offline support
- Better analytics
- Enhanced search capabilities
- Real-time collaboration features

### Deprecation of Old Frontend
- **Timeline**: 3 months after successful migration
- **Steps**:
  1. Redirect all traffic to Frontend2
  2. Archive Frontend codebase
  3. Update documentation
  4. Remove from deployment pipeline
  5. Keep as reference for 6 months

---

## Change Log

| Date | Version | Changes | Author |
|------|---------|---------|--------|
| 2026-02-20 | 1.0 | Initial roadmap created | - |

---

## Notes

- This is a living document and will be updated as the migration progresses
- Regular review meetings recommended to assess progress
- Stakeholder communication is crucial for success
- User feedback should drive prioritization
