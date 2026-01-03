# EduConnect - Professional Education Consultation Platform

 <img src="https://github.com/sparshsharma81/sparshsharma81/blob/main/images/educonnect-4.gif?raw=true" width="1400" />
 
![Next.js](https://img.shields.io/badge/Next.js-15.3.2-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Prisma](https://img.shields.io/badge/Prisma-6.9.0-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)
![License](https://img.shields.io/badge/License-ISC-blue?style=for-the-badge)

## Overview

EduConnect is a comprehensive, full-stack education consultation platform that enables seamless appointment scheduling between students and verified education professionals. The platform provides real-time video consultation capabilities, credit-based booking system, and robust admin management tools.

### Key Features
- **teacher-student Matching**: Browse and filter teachers by specialty
- **Appointment Scheduling**: Real-time slot management and booking system
- **Video Consultation**: Integrated video calls using Vonage Video API
- **Credit System**: Token-based appointment purchasing with tiered plans
- **teacher Verification**: Multi-level authentication and credentialing system
- **Payout Management**: Automated payment processing for healthcare providers
- **Admin Dashboard**: Comprehensive management and monitoring tools
- **Dark Mode Support**: Theme switching with next-themes

---

## Table of Contents

- [Technology Stack](#technology-stack)
- [Project Architecture](#project-architecture)
- [Installation & Setup](#installation--setup)
- [Environment Configuration](#environment-configuration)
- [Suggested Workflows](#suggested-workflows)
- [API Documentation](#api-documentation)
  - [Authentication Endpoints](#authentication-endpoints)
  - [teacher Management Endpoints](#teacher-management-endpoints)
  - [student Endpoints](#student-endpoints)
  - [Appointment Endpoints](#appointment-endpoints)
  - [Admin Endpoints](#admin-endpoints)
  - [Credit System Endpoints](#credit-system-endpoints)
- [Database Schema](#database-schema)
- [Development Guidelines](#development-guidelines)
- [Deployment](#deployment)

---

## Technology Stack

### Frontend
| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org) | 15.3.2 | Full-stack React framework with App Router |
| [React](https://react.dev) | 19.1.0 | UI library |
| [TailwindCSS](https://tailwindcss.com) | 4.1.7 | Utility-first CSS framework |
| [Shadcn/ui](https://ui.shadcn.com) | Latest | Pre-built accessible components |
| [React Hook Form](https://react-hook-form.com) | 7.56.3 | Performant form validation |
| [Zod](https://zod.dev) | 3.24.4 | TypeScript-first schema validation |
| [Lucide React](https://lucide.dev) | 0.510.0 | Icon library |
| [Sonner](https://sonner.emilkowal.ski) | 2.0.3 | Toast notifications |
| [React Spinners](https://react-spinners.dev) | 0.17.0 | Loading indicators |
| [next-themes](https://github.com/pacocoursey/next-themes) | 0.4.6 | Theme management |

### Backend & Database
| Technology | Version | Purpose |
|---|---|---|
| [Prisma](https://www.prisma.io) | 6.9.0 | ORM for database management |
| [PostgreSQL](https://www.postgresql.org) | - | Relational database |

### Authentication & Security
| Technology | Version | Purpose |
|---|---|---|
| [@clerk/nextjs](https://clerk.com) | 6.19.3 | User authentication & management |
| [@clerk/themes](https://clerk.com) | 2.2.43 | Clerk UI theming |

### Communication & Video
| Technology | Version | Purpose |
|---|---|---|
| [@vonage/server-sdk](https://vonage.com) | 3.21.0 | Video session management |
| [@vonage/client-sdk-video](https://vonage.com) | 2.30.0 | Video client library |
| [@vonage/video](https://vonage.com) | 1.23.0 | Video integration |
| [@vonage/auth](https://vonage.com) | 1.12.0 | Vonage authentication |
| [opentok](https://vonage.com) | 2.21.2 | OpenTok video API |

### UI Components
| Component | Library |
|---|---|
| Alerts & Dialogs | @radix-ui |
| Forms & Inputs | @radix-ui + Shadcn |
| Tabs & Navigation | @radix-ui |
| Dropdowns | Radix UI Select |

### Development Tools
| Tool | Version | Purpose |
|---|---|---|
| [ESLint](https://eslint.org) | 9 | Code linting |
| [PostCSS](https://postcss.org) | 8.5.3 | CSS transformation |
| [Autoprefixer](https://autoprefixer.github.io) | 10.4.21 | CSS vendor prefixes |

---

## Project Architecture

```
EduConnect/
├── app/                           # Next.js App Router
│   ├── (auth)/                   # Authentication routes (public)
│   │   ├── sign-in/
│   │   └── sign-up/
│   ├── (main)/                   # Main application (protected)
│   │   ├── admin/                # Admin dashboard
│   │   ├── appointments/         # Appointment listing
│   │   ├── teacher/               # teacher dashboard
│   │   ├── teachers/              # teacher discovery & search
│   │   ├── onboarding/           # User role selection
│   │   └── video-call/           # Video consultation UI
│   └── globals.css               # Global styles
├── actions/                       # Server-side actions (API layer)
│   ├── admin.js                  # Admin operations
│   ├── appointments.js           # Appointment management
│   ├── credits.js                # Credit system
│   ├── teacher.js                 # teacher operations
│   ├── teachers-listing.js        # teacher search/filter
│   ├── onboarding.js             # User onboarding
│   ├── student.js                # student operations
│   ├── payout.js                 # Payout management
│   └── teachers-listing.js        # teacher queries
├── components/                    # Reusable React components
│   ├── ui/                       # Shadcn/ui components
│   ├── Header.jsx
│   ├── theme-provider.jsx
│   └── appointment-card.jsx
├── hooks/                        # Custom React hooks
│   └── use-fetch.js             # Data fetching utility
├── lib/                          # Utility functions
│   ├── prisma.js                # Prisma client instance
│   ├── schema.js                # Data validation schemas
│   ├── utils.js                 # Helper functions
│   ├── checkUser.js             # User verification
│   ├── data.js                  # Data processing
│   └── specialities.js          # academic specialties
├── prisma/                       # Database configuration
│   ├── schema.prisma            # Data models
│   └── migrations/              # Database migrations
├── public/                       # Static assets
├── middleware.js                 # Clerk authentication middleware
└── package.json                  # Dependencies

```

---

## Installation & Setup

### Prerequisites
- Node.js 18+ (v19 recommended)
- npm or yarn package manager
- PostgreSQL database
- Clerk account (authentication)
- Vonage account (video API)

### Step 1: Clone & Install

```bash
# Clone the repository
git clone https://github.com/sparshsharma81/medime1.git
cd EduConnect

# Install dependencies
npm install
# or with legacy peer deps if issues occur
npm install --legacy-peer-deps
```

### Step 2: Environment Configuration

Create a `.env.local` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/educonnect"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Vonage Video API
NEXT_PUBLIC_VONAGE_APPLICATION_ID=your_vonage_app_id
VONAGE_PRIVATE_KEY=your_vonage_private_key
```

### Step 3: Database Setup

```bash
# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate deploy

# (Optional) Seed test data
npx prisma db seed
```

### Step 4: Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Step 5: Build for Production

```bash
npm run build
npm start
```

---

## Suggested Workflows

EduConnect includes **4 GitHub Actions workflows** for CI/CD, testing, and deployment. These workflows run automatically on every push and PR to maintain code quality.

### 1. **CI Workflow** (`.github/workflows/ci.yml`)
**Purpose**: Lint code, build application, and run security audits

| Task | Trigger | Details |
|---|---|---|
| ESLint | Every push/PR | Checks code quality with ESLint |
| Build | Every push/PR | Builds Next.js application |
| Type Check | Every push/PR | Validates TypeScript types |
| Security Audit | Every push/PR | Runs `npm audit` for vulnerable packages |

**When to care**: If build/lint fails, fix issues before merging

**Example Status**:
```
✅ ci/lint - Code quality passed
✅ ci/build - Build successful
✅ ci/type-check - No type errors
✅ ci/security-audit - No critical vulnerabilities
```

---

### 2. **Prisma Validation** (`.github/workflows/prisma-validate.yml`)
**Purpose**: Validate database schema and test migrations

| Task | Trigger | Details |
|---|---|---|
| Schema Validation | On schema.prisma changes | Validates Prisma schema syntax |
| Generate Client | On schema.prisma changes | Regenerates Prisma Client |
| Migration Test | On schema.prisma changes | Tests migrations on test database |

**When to care**: If schema changes fail validation, fix `prisma/schema.prisma`

**Example Status**:
```
✅ prisma/validate-schema - Schema valid
✅ prisma/test-migrations - Migrations successful
```

---

### 3. **Deployment Pipeline** (`.github/workflows/deploy.yml`)
**Purpose**: Auto-deploy to Vercel when main branch is updated

| Task | Trigger | Details |
|---|---|---|
| Build | Push to main | Builds application for production |
| Deploy | Push to main | Deploys to Vercel automatically |
| Slack Notify | Push to main | Sends deployment status to Slack |

**When to care**: After merging to main, your app auto-deploys. Check Vercel dashboard

**Example Status**:
```
✅ Build successful
✅ Deployed to https://sparsh2.vercel.app
✅ Slack notification sent
```

---

### 4. **Security & Dependencies** (`.github/workflows/security.yml`)
**Purpose**: Check for vulnerabilities, outdated packages, and code quality

| Task | Trigger | Details |
|---|---|---|
| Dependency Check | Weekly + on package.json changes | Audits npm packages |
| Snyk Scan | Weekly + on package.json changes | Advanced security scanning |
| CodeQL Analysis | Weekly + on package.json changes | GitHub's code analysis |
| License Check | Weekly + on package.json changes | Checks package licenses |

**When to care**: If vulnerabilities found, update packages or suppress in review

**Example Status**:
```
✅ dependency-check - No moderate vulnerabilities
✅ security-scan - Security passed
✅ codeql - No issues found
✅ license-check - All licenses compatible
```

---

### Required GitHub Secrets (to set up deployment)

Add these to your GitHub repository settings (`Settings → Secrets and variables → Actions`):

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY    → Your Clerk public key
CLERK_SECRET_KEY                      → Your Clerk secret
DATABASE_URL                          → Your PostgreSQL connection string
NEXT_PUBLIC_VONAGE_APPLICATION_ID    → Your Vonage app ID
VONAGE_PRIVATE_KEY                    → Your Vonage private key
VERCEL_TOKEN                          → Your Vercel authentication token
VERCEL_PROJECT_ID                     → Your Vercel project ID
VERCEL_ORG_ID                         → Your Vercel org ID
SNYK_TOKEN                            → (Optional) Snyk security token
SLACK_WEBHOOK                         → (Optional) Slack webhook for notifications
```

**How to get these**:
1. **Clerk**: [https://clerk.com/docs/deployments/environments](https://clerk.com/docs/deployments/environments)
2. **Vonage**: [https://vonage.com/communications-apis/](https://vonage.com/communications-apis/)
3. **Vercel**: [https://vercel.com/account/tokens](https://vercel.com/account/tokens)
4. **Snyk**: [https://app.snyk.io/account/](https://app.snyk.io/account/)

---

### Workflow Best Practices

✅ **DO:**
- Merge only after all workflows pass
- Keep secrets secure (never commit to repo)
- Review CodeQL findings before deployment
- Monitor Slack notifications for deployment issues

❌ **DON'T:**
- Force push to main (triggers redeploy)
- Skip workflow failures
- Commit sensitive keys
- Use weak npm passwords

---

## Environment Configuration

### Clerk Setup

1. Create a project at [clerk.com](https://clerk.com)
2. Configure OAuth providers (Google, GitHub, etc.)
3. Get your API keys from Clerk Dashboard
4. Configure redirect URIs

### Vonage Video Setup

1. Create a Vonage account at [vonage.com](https://vonage.com)
2. Create a Video API application
3. Generate private key
4. Add credentials to `.env.local`

### PostgreSQL Setup

```bash
# Create database
createdb educonnect

# Verify connection
psql -U postgres -d educonnect -c "SELECT version();"
```

---

## API Documentation

### Authentication Endpoints

#### 1. **Set User Role (Onboarding)**
- **Function**: `setUserRole(formData)`
- **File**: [actions/onboarding.js](actions/onboarding.js)
- **Auth Required**: ✅ Yes (Clerk)
- **Parameters**:
  ```javascript
  {
    role: "student" | "teacher",
    specialty?: string,           // Required for teacher
    experience?: number,          // Required for teacher
    credentialUrl?: string,       // Required for teacher
    description?: string          // Required for teacher
  }
  ```
- **Returns**:
  ```javascript
  { success: true, redirect: "/teachers" | "/teacher/verification" }
  ```
- **Description**: Initialize user account after sign-up, assign role and collect role-specific information

#### 2. **Get Current User Profile**
- **Function**: `getCurrentUser()`
- **File**: [actions/onboarding.js](actions/onboarding.js)
- **Auth Required**: ✅ Yes (Clerk)
- **Parameters**: None
- **Returns**:
  ```javascript
  {
    id: string,
    clerkUserId: string,
    email: string,
    name: string,
    role: "student" | "teacher" | "ADMIN",
    credits: number,
    specialty?: string,
    experience?: number,
    verificationStatus?: "PENDING" | "VERIFIED" | "REJECTED"
  }
  ```
- **Description**: Retrieve authenticated user's complete profile information

---

### teacher Management Endpoints

#### 1. **Set Availability Slots**
- **Function**: `setAvailabilitySlots(formData)`
- **File**: [actions/teacher.js](actions/teacher.js)
- **Auth Required**: ✅ Yes (teacher role)
- **Parameters**:
  ```javascript
  {
    startTime: string,  // ISO DateTime
    endTime: string     // ISO DateTime
  }
  ```
- **Returns**:
  ```javascript
  { success: true, message: "Availability set successfully" }
  ```
- **Validation**: 
  - Start time must be before end time
  - teacher must be verified
- **Description**: Define working hours and available consultation slots

#### 2. **Get teacher Availability**
- **Function**: `getteacherAvailability()`
- **File**: [actions/teacher.js](actions/teacher.js)
- **Auth Required**: ✅ Yes (teacher role)
- **Parameters**: None
- **Returns**:
  ```javascript
  {
    availabilities: [
      {
        id: string,
        teacherId: string,
        startTime: DateTime,
        endTime: DateTime,
        status: "AVAILABLE" | "BOOKED" | "BLOCKED"
      }
    ]
  }
  ```
- **Description**: Retrieve all availability slots for the authenticated teacher

#### 3. **Get teacher Appointments**
- **Function**: `getteacherAppointments()`
- **File**: [actions/teacher.js](actions/teacher.js)
- **Auth Required**: ✅ Yes (teacher role)
- **Parameters**: None
- **Returns**:
  ```javascript
  {
    appointments: [
      {
        id: string,
        studentId: string,
        startTime: DateTime,
        endTime: DateTime,
        status: "SCHEDULED" | "COMPLETED" | "CANCELLED",
        student: { name, email, imageUrl },
        notes: string
      }
    ]
  }
  ```
- **Description**: Fetch all appointments assigned to the teacher

#### 4. **Cancel Appointment**
- **Function**: `cancelAppointment(formData)`
- **File**: [actions/teacher.js](actions/teacher.js)
- **Auth Required**: ✅ Yes (teacher role)
- **Parameters**:
  ```javascript
  { appointmentId: string }
  ```
- **Returns**:
  ```javascript
  { success: true, message: "Appointment cancelled" }
  ```
- **Side Effects**: Refunds credits to student account
- **Description**: Cancel scheduled appointment and release booking slot

#### 5. **Add Appointment Notes**
- **Function**: `addAppointmentNotes(formData)`
- **File**: [actions/teacher.js](actions/teacher.js)
- **Auth Required**: ✅ Yes (teacher role)
- **Parameters**:
  ```javascript
  {
    appointmentId: string,
    notes: string
  }
  ```
- **Returns**:
  ```javascript
  { success: true }
  ```
- **Description**: Append clinical notes to appointment record

#### 6. **Mark Appointment Completed**
- **Function**: `markAppointmentCompleted(formData)`
- **File**: [actions/teacher.js](actions/teacher.js)
- **Auth Required**: ✅ Yes (teacher role)
- **Parameters**:
  ```javascript
  { appointmentId: string }
  ```
- **Returns**:
  ```javascript
  { success: true }
  ```
- **Side Effects**: Triggers payout calculation for teacher
- **Description**: Mark consultation as completed and initiate teacher payment

---

### student Endpoints

#### 1. **Get student Appointments**
- **Function**: `getstudentAppointments()`
- **File**: [actions/student.js](actions/student.js)
- **Auth Required**: ✅ Yes (student role)
- **Parameters**: None
- **Returns**:
  ```javascript
  {
    appointments: [
      {
        id: string,
        teacherId: string,
        startTime: DateTime,
        endTime: DateTime,
        status: "SCHEDULED" | "COMPLETED" | "CANCELLED",
        teacher: { id, name, specialty, imageUrl },
        notes: string
      }
    ]
  }
  ```
- **Description**: Retrieve all booked appointments for the authenticated student

---

### Appointment Endpoints

#### 1. **Book New Appointment**
- **Function**: `bookAppointment(formData)`
- **File**: [actions/appointments.js](actions/appointments.js)
- **Auth Required**: ✅ Yes (student role)
- **Parameters**:
  ```javascript
  {
    teacherId: string,
    startTime: string,        // ISO DateTime
    endTime: string,          // ISO DateTime
    description?: string      // student's chief complaint
  }
  ```
- **Returns**:
  ```javascript
  {
    success: true,
    appointmentId: string
  }
  ```
- **Validation**:
  - Slot must be within teacher's availability
  - student must have sufficient credits (2 credits per appointment)
  - Appointment must be in future
- **Side Effects**:
  - Deducts 2 credits from student account
  - Creates CreditTransaction record
  - Marks availability slot as BOOKED
- **Description**: Schedule new consultation appointment

#### 2. **Get teacher by ID**
- **Function**: `getteacherById(teacherId)`
- **File**: [actions/appointments.js](actions/appointments.js)
- **Auth Required**: ❌ No
- **Parameters**: `{ teacherId: string }`
- **Returns**:
  ```javascript
  {
    id: string,
    name: string,
    specialty: string,
    experience: number,
    description: string,
    imageUrl: string,
    verificationStatus: "VERIFIED" | "PENDING"
  }
  ```
- **Description**: Fetch detailed teacher profile information

#### 3. **Get Available Time Slots**
- **Function**: `getAvailableTimeSlots(teacherId)`
- **File**: [actions/appointments.js](actions/appointments.js)
- **Auth Required**: ❌ No
- **Parameters**: `{ teacherId: string }`
- **Returns**:
  ```javascript
  {
    slots: [
      {
        startTime: DateTime,
        endTime: DateTime,
        duration: number  // in minutes
      }
    ]
  }
  ```
- **Description**: Get all open booking slots for a teacher

#### 4. **Generate Video Token**
- **Function**: `generateVideoToken(formData)`
- **File**: [actions/appointments.js](actions/appointments.js)
- **Auth Required**: ✅ Yes
- **Parameters**:
  ```javascript
  { appointmentId: string }
  ```
- **Returns**:
  ```javascript
  {
    sessionId: string,
    token: string,
    apiKey: string
  }
  ```
- **Integration**: Vonage Video API
- **Description**: Generate real-time video conference credentials for appointment

---

### Admin Endpoints

#### 1. **Verify Admin Status**
- **Function**: `verifyAdmin()`
- **File**: [actions/admin.js](actions/admin.js)
- **Auth Required**: ✅ Yes (Admin role)
- **Parameters**: None
- **Returns**:
  ```javascript
  { isAdmin: boolean }
  ```
- **Description**: Check if authenticated user has admin privileges

#### 2. **Get Pending teachers**
- **Function**: `getPendingteachers()`
- **File**: [actions/admin.js](actions/admin.js)
- **Auth Required**: ✅ Yes (Admin role)
- **Parameters**: None
- **Returns**:
  ```javascript
  {
    teachers: [
      {
        id: string,
        name: string,
        email: string,
        specialty: string,
        experience: number,
        credentialUrl: string,
        description: string,
        verificationStatus: "PENDING"
      }
    ]
  }
  ```
- **Description**: List all teachers awaiting verification

#### 3. **Get Verified teachers**
- **Function**: `getVerifiedteachers()`
- **File**: [actions/admin.js](actions/admin.js)
- **Auth Required**: ✅ Yes (Admin role)
- **Parameters**: None
- **Returns**:
  ```javascript
  {
    teachers: [
      {
        id: string,
        name: string,
        specialty: string,
        verificationStatus: "VERIFIED",
        isActive: boolean
      }
    ]
  }
  ```
- **Description**: Retrieve all verified and active teachers

#### 4. **Update teacher Verification Status**
- **Function**: `updateteacherStatus(formData)`
- **File**: [actions/admin.js](actions/admin.js)
- **Auth Required**: ✅ Yes (Admin role)
- **Parameters**:
  ```javascript
  {
    teacherId: string,
    status: "VERIFIED" | "REJECTED"
  }
  ```
- **Returns**:
  ```javascript
  { success: true }
  ```
- **Description**: Approve or reject teacher application after credential review

#### 5. **Update teacher Active Status**
- **Function**: `updateteacherActiveStatus(formData)`
- **File**: [actions/admin.js](actions/admin.js)
- **Auth Required**: ✅ Yes (Admin role)
- **Parameters**:
  ```javascript
  {
    teacherId: string,
    isActive: boolean
  }
  ```
- **Returns**:
  ```javascript
  { success: true }
  ```
- **Description**: Activate or deactivate teacher account

#### 6. **Get Pending Payouts**
- **Function**: `getPendingPayouts()`
- **File**: [actions/admin.js](actions/admin.js)
- **Auth Required**: ✅ Yes (Admin role)
- **Parameters**: None
- **Returns**:
  ```javascript
  {
    payouts: [
      {
        id: string,
        teacherId: string,
        teacher: { name, email },
        amount: number,
        credits: number,
        platformFee: number,
        netAmount: number,
        paypalEmail: string,
        status: "PROCESSING"
      }
    ]
  }
  ```
- **Description**: List all pending payout requests from teachers

#### 7. **Approve Payout**
- **Function**: `approvePayout(formData)`
- **File**: [actions/admin.js](actions/admin.js)
- **Auth Required**: ✅ Yes (Admin role)
- **Parameters**:
  ```javascript
  { payoutId: string }
  ```
- **Returns**:
  ```javascript
  { success: true }
  ```
- **Side Effects**: Updates payout status to PROCESSED, records admin approval
- **Description**: Approve and process teacher payment

---

### Credit System Endpoints

#### 1. **Check and Allocate Credits**
- **Function**: `checkAndAllocateCredits(user)`
- **File**: [actions/credits.js](actions/credits.js)
- **Auth Required**: ✅ Yes
- **Parameters**:
  ```javascript
  { user: User object }
  ```
- **Returns**: Updated user object with allocated credits
- **Credit Allocation**:
  - Free Plan: 0 credits/month (starts with 2)
  - Standard Plan: 10 credits/month
  - Premium Plan: 24 credits/month
- **Logic**: Checks for existing monthly allocation to prevent duplicate credits
- **Description**: Auto-allocate monthly credits based on user subscription tier

#### 2. **Deduct Credits for Appointment**
- **Function**: `deductCreditsForAppointment(userId, teacherId)`
- **File**: [actions/credits.js](actions/credits.js)
- **Auth Required**: ✅ Yes
- **Parameters**:
  ```javascript
  {
    userId: string,
    teacherId: string
  }
  ```
- **Returns**:
  ```javascript
  { success: true, remainingCredits: number }
  ```
- **Cost**: 2 credits per appointment
- **Validation**: student must have minimum 2 credits
- **Side Effects**: Creates CreditTransaction record
- **Description**: Deduct consultation cost from student credit balance

---

### teacher Discovery Endpoints

#### 1. **Get teachers by Specialty**
- **Function**: `getteachersBySpecialty(specialty)`
- **File**: [actions/teachers-listing.js](actions/teachers-listing.js)
- **Auth Required**: ❌ No
- **Parameters**: `{ specialty: string }`
- **Returns**:
  ```javascript
  {
    teachers: [
      {
        id: string,
        name: string,
        specialty: string,
        experience: number,
        description: string,
        imageUrl: string,
        availability: { upcomingSlots: number }
      }
    ]
  }
  ```
- **Filters**: Only returns VERIFIED teachers
- **Description**: Search and filter teachers by academic specialty

---

## Database Schema

### Models & Relationships

#### **User Model**
```prisma
model User {
  id                  String              @id @default(uuid())
  clerkUserId         String              @unique      // Clerk auth ID
  email               String              @unique
  name                String?
  imageUrl            String?
  role                UserRole            @default(UNASSIGNED)
  credits             Int                 @default(2) // Appointment credit balance
  specialty           String?             // academic specialty (teachers only)
  experience          Int?                // Years of experience
  credentialUrl       String?             // Credential verification link
  description         String?             // Bio/About section
  verificationStatus  VerificationStatus? @default(PENDING)
  createdAt           DateTime            @default(now())
  updatedAt           DateTime            @updatedAt

  // Relations
  teacherAppointments  Appointment[]       @relation("teacherAppointments")
  studentAppointments Appointment[]       @relation("studentAppointments")
  availabilities      Availability[]
  transactions        CreditTransaction[]
  payouts             Payout[]
}
```

#### **Availability Model**
```prisma
model Availability {
  id        String     @id @default(uuid())
  teacherId  String
  startTime DateTime
  endTime   DateTime
  status    SlotStatus @default(AVAILABLE)
  
  teacher    User       @relation(fields: [teacherId], references: [id], onDelete: Cascade)
  @@index([teacherId, startTime])
}
```

#### **Appointment Model**
```prisma
model Appointment {
  id                 String            @id @default(uuid())
  studentId          String
  teacherId           String
  startTime          DateTime
  endTime            DateTime
  status             AppointmentStatus @default(SCHEDULED)
  notes              String?           // teacher's clinical notes
  studentDescription String?           // student's chief complaint
  videoSessionId     String?           // Vonage session ID
  videoSessionToken  String?           // Video conference token
  createdAt          DateTime          @default(now())
  updatedAt          DateTime          @updatedAt

  teacher             User              @relation("teacherAppointments", fields: [teacherId], references: [id])
  student            User              @relation("studentAppointments", fields: [studentId], references: [id])
  
  @@index([status, startTime])
  @@index([teacherId, startTime])
}
```

#### **CreditTransaction Model**
```prisma
model CreditTransaction {
  id        String          @id @default(uuid())
  userId    String
  amount    Int             // Number of credits
  type      TransactionType // CREDIT_PURCHASE, APPOINTMENT_DEDUCTION, ADMIN_ADJUSTMENT
  packageId String?         // Subscription plan ID
  createdAt DateTime        @default(now())

  user      User            @relation(fields: [userId], references: [id], onDelete: Cascade)
}
```

#### **Payout Model**
```prisma
model Payout {
  id          String       @id @default(uuid())
  teacherId    String
  amount      Float        // Gross amount
  credits     Int          // Number of appointments
  platformFee Float        // Service fee
  netAmount   Float        // Amount after fees
  paypalEmail String       // Payment method
  status      PayoutStatus @default(PROCESSING)
  createdAt   DateTime     @default(now())
  updatedAt   DateTime     @updatedAt
  processedAt DateTime?
  processedBy String?      // Admin user ID

  teacher      User         @relation(fields: [teacherId], references: [id], onDelete: Cascade)
  
  @@index([status, createdAt])
  @@index([teacherId, status])
}
```

### Enums

```prisma
enum UserRole {
  UNASSIGNED
  student
  teacher
  ADMIN
}

enum VerificationStatus {
  PENDING
  VERIFIED
  REJECTED
}

enum SlotStatus {
  AVAILABLE
  BOOKED
  BLOCKED
}

enum AppointmentStatus {
  SCHEDULED
  COMPLETED
  CANCELLED
}

enum TransactionType {
  CREDIT_PURCHASE
  APPOINTMENT_DEDUCTION
  ADMIN_ADJUSTMENT
}

enum PayoutStatus {
  PROCESSING
  PROCESSED
}
```

---

## Development Guidelines

### Code Structure & Best Practices

1. **Server Actions**: All database operations use Next.js Server Actions in `/actions` directory
2. **Error Handling**: Comprehensive try-catch blocks with meaningful error messages
3. **Validation**: Input validation using Zod schemas
4. **Authentication**: All operations validated against Clerk authentication
5. **Authorization**: Role-based access control (student, teacher, ADMIN)

### Adding New Features

1. **Create Server Action** in appropriate `/actions` file
2. **Update Database Schema** in `prisma/schema.prisma`
3. **Generate Migrations**: `npx prisma migrate dev`
4. **Add UI Components** in `/components` directory
5. **Create Routes** in `/app` following Next.js App Router pattern

### Database Migrations

```bash
# Create migration after schema changes
npx prisma migrate dev --name migration_name

# View migration status
npx prisma migrate status

# Reset database (development only)
npx prisma migrate reset
```

### Linting & Code Quality

```bash
# Run ESLint
npm run lint

# Fix linting issues
npm run lint -- --fix
```

---

## Deployment

### Vercel Deployment (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard
# DATABASE_URL, CLERK_SECRET_KEY, VONAGE_PRIVATE_KEY, etc.
```

### Docker Deployment

```dockerfile
FROM node:19-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Environment Variables for Production

- Ensure all `.env.local` variables are configured in your deployment platform
- Use secure secret management (Vercel Secrets, AWS Secrets Manager, etc.)
- Never commit sensitive keys to version control

---

## API Response Format

### Success Response
```javascript
{
  success: true,
  data: { /* endpoint-specific data */ },
  message?: "Operation completed successfully"
}
```

### Error Response
```javascript
{
  success: false,
  error: "Descriptive error message",
  code?: "ERROR_CODE"
}
```

---

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

---

## License

This project is licensed under the ISC License - see LICENSE file for details.

---

## Support & Documentation

- **Documentation**: See inline JSDoc comments in action files
- **Issues**: Report bugs on GitHub Issues
- **Email Support**: [support@educonnect.com](mailto:support@educonnect.com)

---

## Roadmap

- [ ] Prescription management system
- [ ] academic records storage
- [ ] Payment gateway integration (Stripe/Razorpay)
- [ ] teacher availability calendar view
- [ ] Appointment reminders (SMS/Email)
- [ ] Mobile app (React Native)
- [ ] Analytics dashboard
- [ ] Multi-language support

---

**Last Updated**: January 2026  
**Version**: 1.0.0
