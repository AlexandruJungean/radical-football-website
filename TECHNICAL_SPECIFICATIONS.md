# 🛠 Radical Football Platform - Technical Specifications

## 📋 Project Overview
**Platform:** Radical Football - Affective Pedagogical Community  
**Architecture:** Full-stack web application with real-time features  
**Scale:** Community-driven platform supporting multiple user types and content formats

---

## 🏗 **SYSTEM ARCHITECTURE**

### Technology Stack
- **Frontend:** Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Backend:** Node.js with Express.js or Next.js API routes
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** NextAuth.js with multiple providers
- **File Storage:** AWS S3 or Cloudinary for multimedia content
- **Payment Processing:** Stripe for donations and ticket sales
- **Real-time Features:** Socket.io or Pusher
- **Email Service:** SendGrid or Resend
- **Hosting:** Vercel (frontend) + Railway/MongoDB Atlas (backend/database)

### System Requirements
- **Performance:** < 3s page load times, 99.9% uptime
- **Scalability:** Support 10,000+ concurrent users
- **Security:** GDPR compliant, child protection protocols
- **Accessibility:** WCAG 2.1 AA compliance
- **Mobile:** Responsive design, PWA capabilities

---

## 🗄 **DATABASE SCHEMA**

### User Management
```typescript
interface User {
  _id: ObjectId;
  email: string;
  name: string;
  role: 'visitor' | 'user' | 'speaker' | 'circle_member' | 'admin';
  profile: {
    avatar?: string;
    bio?: string;
    location?: {
      city: string;
      country: string;
      coordinates?: [number, number];
    };
    expertise?: string[];
    languages?: string[];
  };
  preferences: {
    language: 'en' | 'ro';
    notifications: {
      email: boolean;
      push: boolean;
      community: boolean;
    };
    privacy: {
      profileVisible: boolean;
      locationVisible: boolean;
      activityVisible: boolean;
    };
  };
  subscription?: {
    type: 'free' | 'basic' | 'premium';
    startDate: Date;
    endDate?: Date;
    stripeCustomerId?: string;
  };
  createdAt: Date;
  updatedAt: Date;
  lastActive: Date;
}
```

### Content Management
```typescript
interface Content {
  _id: ObjectId;
  type: 'article' | 'video' | 'audio' | 'resource' | 'manifest' | 'journal';
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  media?: {
    type: 'image' | 'video' | 'audio' | 'document';
    url: string;
    thumbnail?: string;
    duration?: number;
    size?: number;
  }[];
  metadata: {
    author: ObjectId;
    category: string;
    tags: string[];
    ageGroups?: ('U7-U11' | 'U12-U16' | 'U17+')[];
    themes?: string[];
    difficulty?: 'beginner' | 'intermediate' | 'advanced';
  };
  access: {
    requiresAuth: boolean;
    allowedRoles: string[];
    isPublic: boolean;
  };
  engagement: {
    views: number;
    likes: number;
    shares: number;
    comments: ObjectId[];
    affectiveResponses: {
      emoji: string;
      userId: ObjectId;
      timestamp: Date;
    }[];
  };
  breakSpaces?: {
    type: string;
    content: string;
    userId: ObjectId;
    timestamp: Date;
  }[];
  status: 'draft' | 'published' | 'archived';
  publishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}
```

### Community & Forums
```typescript
interface Forum {
  _id: ObjectId;
  name: string;
  slug: string;
  description: string;
  category: 'parents' | 'coaches' | 'general' | 'conference' | 'circle';
  access: {
    requiresAuth: boolean;
    allowedRoles: string[];
    isModerated: boolean;
  };
  topics: ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

interface Topic {
  _id: ObjectId;
  forumId: ObjectId;
  title: string;
  content: string;
  author: ObjectId;
  tags: string[];
  status: 'active' | 'closed' | 'pinned';
  engagement: {
    views: number;
    replies: number;
    lastReply?: Date;
  };
  moderation: {
    isModerated: boolean;
    moderatorId?: ObjectId;
    moderationNotes?: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

interface Reply {
  _id: ObjectId;
  topicId: ObjectId;
  content: string;
  author: ObjectId;
  parentReply?: ObjectId;
  media?: {
    type: 'image' | 'audio' | 'video';
    url: string;
  }[];
  moderation: {
    isModerated: boolean;
    moderatorId?: ObjectId;
    moderationNotes?: string;
  };
  createdAt: Date;
  updatedAt: Date;
}
```

### Break Spaces System
```typescript
interface BreakSpace {
  _id: ObjectId;
  type: 'raw_journal' | 'dont_understand' | 'lantern_out' | 'reflection_blocked' | 'impossible_question' | 'waiting_progress' | 'what_wrong';
  title: string;
  content: string;
  author: ObjectId;
  location: {
    page: string;
    section?: string;
    context?: string;
  };
  visibility: 'public' | 'anonymous' | 'moderated';
  responses?: {
    userId: ObjectId;
    content: string;
    timestamp: Date;
  }[];
  moderation: {
    isModerated: boolean;
    moderatorId?: ObjectId;
    status: 'pending' | 'approved' | 'rejected';
    notes?: string;
  };
  createdAt: Date;
  updatedAt: Date;
}
```

### Conference Management
```typescript
interface Conference {
  _id: ObjectId;
  year: number;
  title: string;
  slug: string;
  description: string;
  dates: {
    start: Date;
    end: Date;
  };
  location: {
    venue: string;
    address: string;
    city: string;
    country: string;
    coordinates?: [number, number];
  };
  tickets: {
    type: 'early_bird' | 'regular' | 'vip' | 'student';
    price: number;
    currency: string;
    available: number;
    sold: number;
    installments?: boolean;
  }[];
  speakers: ObjectId[];
  sponsors: ObjectId[];
  program: {
    day: number;
    sessions: {
      time: string;
      title: string;
      speaker?: ObjectId;
      description: string;
      type: 'keynote' | 'workshop' | 'panel' | 'break';
    }[];
  }[];
  media: {
    photos: string[];
    videos: string[];
    documents: string[];
  };
  status: 'upcoming' | 'active' | 'completed';
  createdAt: Date;
  updatedAt: Date;
}
```

### Payment & Subscriptions
```typescript
interface Payment {
  _id: ObjectId;
  userId: ObjectId;
  type: 'donation' | 'ticket' | 'subscription' | 'consultancy';
  amount: number;
  currency: string;
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  stripePaymentId: string;
  metadata: {
    conferenceId?: ObjectId;
    ticketType?: string;
    subscriptionType?: string;
    consultancyPackage?: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

interface Subscription {
  _id: ObjectId;
  userId: ObjectId;
  type: 'monthly' | 'yearly';
  amount: number;
  currency: string;
  status: 'active' | 'cancelled' | 'expired';
  stripeSubscriptionId: string;
  currentPeriodStart: Date;
  currentPeriodEnd: Date;
  createdAt: Date;
  updatedAt: Date;
}
```

---

## 🔐 **AUTHENTICATION & AUTHORIZATION**

### Authentication Flow
1. **Email/Password Registration** with email verification
2. **Social Login** (Google, Facebook, LinkedIn)
3. **Magic Link** authentication for passwordless login
4. **Two-Factor Authentication** for admin accounts

### Role-Based Access Control
```typescript
enum UserRole {
  VISITOR = 'visitor',      // No account, limited access
  USER = 'user',           // Basic account, library access
  SPEAKER = 'speaker',     // Conference speaker privileges
  CIRCLE_MEMBER = 'circle_member', // Editorial privileges
  ADMIN = 'admin'          // Full system access
}

interface Permission {
  resource: string;
  action: 'create' | 'read' | 'update' | 'delete';
  conditions?: Record<string, any>;
}
```

### Security Measures
- **JWT Tokens** with refresh token rotation
- **Rate Limiting** on authentication endpoints
- **CSRF Protection** on all forms
- **Input Validation** and sanitization
- **SQL Injection Prevention** through ODM
- **XSS Protection** with Content Security Policy

---

## 💳 **PAYMENT INTEGRATION**

### Stripe Configuration
```typescript
interface StripeConfig {
  publishableKey: string;
  secretKey: string;
  webhookSecret: string;
  currency: 'eur' | 'ron';
  paymentMethods: ['card', 'bank_transfer', 'sepa_debit'];
}
```

### Payment Flows
1. **One-time Donations**
   - Custom amount input
   - Recurring donation options
   - Tax receipt generation

2. **Conference Tickets**
   - Multiple ticket types
   - Installment payment options
   - Group booking discounts

3. **Monthly Subscriptions**
   - €5, €10, €20 tiers
   - Exclusive content access
   - Cancel anytime

4. **Consultancy Services**
   - Package-based pricing
   - Milestone payments
   - Invoice generation

### Webhook Handlers
- Payment success/failure notifications
- Subscription lifecycle events
- Refund processing
- Invoice generation

---

## 📁 **FILE MANAGEMENT**

### File Storage Architecture
```typescript
interface FileUpload {
  _id: ObjectId;
  filename: string;
  originalName: string;
  mimeType: string;
  size: number;
  url: string;
  thumbnail?: string;
  metadata: {
    uploadedBy: ObjectId;
    category: 'image' | 'video' | 'audio' | 'document';
    tags: string[];
    isPublic: boolean;
  };
  createdAt: Date;
}
```

### Supported Formats
- **Images:** JPG, PNG, WebP, SVG (max 10MB)
- **Videos:** MP4, WebM, MOV (max 500MB)
- **Audio:** MP3, WAV, M4A (max 50MB)
- **Documents:** PDF, DOC, DOCX (max 20MB)

### Processing Pipeline
1. **Upload Validation** (size, format, virus scan)
2. **Image Optimization** (resize, compress, WebP conversion)
3. **Video Processing** (compression, thumbnail generation)
4. **Audio Transcription** (for accessibility)
5. **CDN Distribution** for global delivery

---

## 🔄 **REAL-TIME FEATURES**

### WebSocket Events
```typescript
interface WebSocketEvents {
  // Community events
  'user:joined': { userId: string; location: string };
  'user:left': { userId: string };
  'message:new': { topicId: string; reply: Reply };
  'reaction:added': { contentId: string; emoji: string; userId: string };
  
  // Break space events
  'breakspace:created': { type: string; location: string };
  'breakspace:response': { breakspaceId: string; response: any };
  
  // Conference events
  'conference:update': { conferenceId: string; update: any };
  'ticket:sold': { conferenceId: string; ticketType: string };
}
```

### Real-time Features
- **Live Chat** in forums and break spaces
- **Live Reactions** to content (emoji responses)
- **User Presence** indicators
- **Live Conference Updates**
- **Real-time Notifications**

---

## 📧 **NOTIFICATION SYSTEM**

### Notification Types
```typescript
interface Notification {
  _id: ObjectId;
  userId: ObjectId;
  type: 'email' | 'push' | 'in_app';
  category: 'community' | 'conference' | 'content' | 'payment' | 'moderation';
  title: string;
  message: string;
  data?: Record<string, any>;
  read: boolean;
  createdAt: Date;
}
```

### Notification Triggers
- **Community:** New replies, mentions, forum updates
- **Conference:** Registration confirmations, schedule changes
- **Content:** New resources, break space responses
- **Payment:** Successful payments, subscription renewals
- **Moderation:** Content approval/rejection, safety alerts

### Delivery Methods
- **Email:** SendGrid integration with templates
- **Push Notifications:** Service Worker implementation
- **In-App:** Real-time WebSocket delivery
- **SMS:** Critical notifications only

---

## 🛡 **MODERATION & SAFETY**

### Content Moderation
```typescript
interface ModerationQueue {
  _id: ObjectId;
  contentId: ObjectId;
  contentType: 'forum' | 'breakspace' | 'comment' | 'upload';
  reportedBy: ObjectId;
  reason: string;
  status: 'pending' | 'reviewed' | 'resolved';
  moderatorId?: ObjectId;
  action?: 'approve' | 'reject' | 'warn' | 'ban';
  notes?: string;
  createdAt: Date;
  resolvedAt?: Date;
}
```

### Safety Features
- **Automated Content Filtering** (profanity, inappropriate content)
- **Manual Review Queue** for flagged content
- **User Reporting System** with anonymous options
- **Child Protection Protocols** with immediate escalation
- **Moderator Dashboard** with action tracking

### Privacy Protection
- **GDPR Compliance** with data export/deletion
- **Anonymous Posting** options in break spaces
- **Data Encryption** at rest and in transit
- **Audit Logging** for all user actions
- **Consent Management** for data collection

---

## 📊 **ANALYTICS & METRICS**

### User Analytics
```typescript
interface UserAnalytics {
  userId: ObjectId;
  sessionData: {
    startTime: Date;
    endTime: Date;
    pages: string[];
    breakSpaceInteractions: string[];
    affectiveResponses: string[];
  }[];
  engagement: {
    totalSessions: number;
    averageSessionDuration: number;
    favoriteContent: ObjectId[];
    activeBreakSpaces: string[];
  };
  createdAt: Date;
  updatedAt: Date;
}
```

### Content Analytics
- **Page Views** and time on page
- **Break Space Usage** by type and location
- **Affective Response Patterns** (emoji usage)
- **Content Completion Rates**
- **User Journey Mapping**

### Business Metrics
- **Revenue Tracking** by source and type
- **Conference Registration** and attendance
- **Subscription Retention** rates
- **Consultancy Conversion** rates
- **Community Growth** metrics

---

## 🚀 **DEPLOYMENT & INFRASTRUCTURE**

### Environment Configuration
```typescript
interface EnvironmentConfig {
  NODE_ENV: 'development' | 'staging' | 'production';
  DATABASE_URL: string;
  MONGODB_URI: string;
  STRIPE_PUBLISHABLE_KEY: string;
  STRIPE_SECRET_KEY: string;
  STRIPE_WEBHOOK_SECRET: string;
  SENDGRID_API_KEY: string;
  AWS_ACCESS_KEY_ID: string;
  AWS_SECRET_ACCESS_KEY: string;
  AWS_S3_BUCKET: string;
  NEXTAUTH_SECRET: string;
  NEXTAUTH_URL: string;
}
```

### Deployment Pipeline
1. **Development:** Local development with hot reload
2. **Staging:** Automated testing and preview deployment
3. **Production:** Blue-green deployment with rollback capability

### Monitoring & Logging
- **Application Performance Monitoring** (APM)
- **Error Tracking** with Sentry integration
- **Uptime Monitoring** with status page
- **Security Scanning** and vulnerability alerts
- **Performance Metrics** and optimization

---

## 🔧 **DEVELOPMENT WORKFLOW**

### Code Quality
- **TypeScript** strict mode enabled
- **ESLint** with custom rules for React/Next.js
- **Prettier** for consistent code formatting
- **Husky** pre-commit hooks
- **Jest** and **React Testing Library** for testing

### Git Workflow
- **Feature Branches** for new development
- **Pull Request Reviews** with required approvals
- **Automated Testing** on all PRs
- **Semantic Versioning** for releases
- **Changelog** maintenance

### Documentation
- **API Documentation** with OpenAPI/Swagger
- **Component Storybook** for UI components
- **Code Comments** and JSDoc
- **User Guides** and tutorials
- **Developer Onboarding** documentation

---

## 📱 **MOBILE & PWA**

### Progressive Web App Features
- **Offline Support** for cached content
- **Push Notifications** for important updates
- **App-like Experience** with splash screens
- **Install Prompt** for home screen addition
- **Background Sync** for offline actions

### Mobile Optimization
- **Responsive Design** for all screen sizes
- **Touch-friendly Interface** with proper spacing
- **Fast Loading** with image optimization
- **Battery Optimization** for mobile devices
- **Accessibility** for screen readers

---

## 🔮 **FUTURE ENHANCEMENTS**

### Planned Features
- **AI-powered Content Recommendations**
- **Advanced Analytics Dashboard**
- **Multi-language Support** (Romanian, English, Spanish)
- **Mobile App** (React Native)
- **Integration APIs** for third-party tools
- **Advanced Search** with filters and faceted navigation
- **Video Streaming** with adaptive bitrate
- **Live Streaming** for conferences and events

### Scalability Considerations
- **Microservices Architecture** for future growth
- **CDN Integration** for global content delivery
- **Database Sharding** for large datasets
- **Caching Strategy** with Redis
- **Load Balancing** for high traffic
- **Auto-scaling** infrastructure

---

*This technical specification provides a comprehensive foundation for building the Radical Football platform. The architecture prioritizes scalability, security, and user experience while maintaining the platform's core values of authenticity, vulnerability, and pedagogical innovation.* 