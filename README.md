# 🤖 AI Expense Tracker

An intelligent expense tracking application powered by AI, built with modern web technologies to help users manage their finances efficiently with smart categorization and insights.

## 🌟 Features

### Core Features
- **Smart Expense Categorization**: AI-powered automatic expense categorization
- **Income & Expense Tracking**: Comprehensive financial transaction management
- **Budget Management**: Create and monitor budgets with real-time alerts
- **Interactive Dashboard**: Visual insights with charts and analytics
- **Receipt Scanning**: AI-powered receipt text extraction and data parsing
- **Financial Insights**: AI-generated spending patterns and recommendations
- **Multi-currency Support**: Track expenses in different currencies
- **Export Data**: Export financial data to CSV/PDF formats

### AI-Powered Features
- **Intelligent Categorization**: Automatically categorize transactions using machine learning
- **Spending Pattern Analysis**: AI-driven insights into your spending habits
- **Budget Recommendations**: Smart budget suggestions based on historical data
- **Expense Prediction**: Predictive analytics for future expenses
- **Smart Notifications**: AI-powered alerts for unusual spending patterns

### User Experience
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Real-time Updates**: Live data synchronization across all devices
- **Dark/Light Mode**: Theme switching for better user experience
- **Search & Filter**: Advanced filtering options for transactions
- **Data Visualization**: Interactive charts and graphs

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 14+](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Charts**: [Recharts](https://recharts.org/) / [Chart.js](https://www.chartjs.org/)
- **Icons**: [Lucide React](https://lucide.dev/)

### Backend & Database
- **Database**: [PostgreSQL](https://www.postgresql.org/) / [MongoDB](https://www.mongodb.com/)
- **ORM**: [Prisma](https://www.prisma.io/) / [Drizzle ORM](https://orm.drizzle.team/)
- **Authentication**: [Clerk](https://clerk.com/) / [NextAuth.js](https://next-auth.js.org/)
- **API**: Next.js API Routes / Server Actions

### AI & Machine Learning
- **AI Platform**: [OpenAI API](https://openai.com/api/) / [Google AI](https://ai.google.dev/)
- **Text Processing**: Natural Language Processing for receipt scanning
- **Machine Learning**: TensorFlow.js for client-side predictions

### Deployment & Infrastructure
- **Hosting**: [Vercel](https://vercel.com/) / [Netlify](https://www.netlify.com/)
- **Database Hosting**: [Neon](https://neon.tech/) / [PlanetScale](https://planetscale.com/) / [MongoDB Atlas](https://www.mongodb.com/atlas)
- **File Storage**: [Cloudinary](https://cloudinary.com/) / [AWS S3](https://aws.amazon.com/s3/)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)

### Development Tools
- **Package Manager**: npm / yarn / pnpm
- **Code Quality**: ESLint, Prettier
- **Version Control**: Git
- **Environment**: Node.js 18+

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm, yarn, or pnpm package manager
- PostgreSQL/MongoDB database (local or hosted)
- Clerk account for authentication
- OpenAI API key (for AI features)

### Installation


1. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your environment variables:
   ```env
   # Database
   DATABASE_URL="your-database-connection-string"
   
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your-clerk-publishable-key"
   CLERK_SECRET_KEY="your-clerk-secret-key"
   
   # OpenAI API
   OPENAI_API_KEY="your-openai-api-key"
   
   # Cloudinary (for file uploads)
   CLOUDINARY_CLOUD_NAME="your-cloudinary-name"
   CLOUDINARY_API_KEY="your-cloudinary-key"
   CLOUDINARY_API_SECRET="your-cloudinary-secret"
   
   # Next.js
   NEXTAUTH_SECRET="your-nextauth-secret"
   NEXTAUTH_URL="http://localhost:3000"
   ```

3. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   # or for development
   npx prisma migrate dev
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
ai-expense-tracker/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication routes
│   ├── dashboard/         # Dashboard pages
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable UI components
│   ├── ui/                # shadcn/ui components
│   ├── charts/            # Chart components
│   ├── forms/             # Form components
│   └── layout/            # Layout components
├── lib/                   # Utility functions
│   ├── db.ts              # Database configuration
│   ├── auth.ts            # Authentication setup
│   ├── ai.ts              # AI service functions
│   └── utils.ts           # General utilities
├── prisma/                # Database schema and migrations
│   ├── schema.prisma      # Prisma schema
│   └── migrations/        # Database migrations
├── public/                # Static assets
├── types/                 # TypeScript type definitions
└── hooks/                 # Custom React hooks
```

## 🚀 Deployment

### Deploy on Vercel (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Connect your GitHub repository to Vercel
   - Add your environment variables in Vercel dashboard
   - Deploy automatically with each push to main

3. **Set up database**
   - Use Neon, PlanetScale, or another hosted PostgreSQL service
   - Update your `DATABASE_URL` in Vercel environment variables
   - Run database migrations in Vercel build settings

### Alternative Deployment Options
- **Netlify**: For static deployment with serverless functions
- **Railway**: Full-stack deployment with database included
- **DigitalOcean App Platform**: Container-based deployment

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use Prettier for code formatting
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

## 📝 API Documentation

### Authentication
All API routes require authentication via Clerk. Include the session token in your requests.

### Endpoints
- `GET /api/transactions` - Fetch user transactions
- `POST /api/transactions` - Create new transaction
- `PUT /api/transactions/:id` - Update transaction
- `DELETE /api/transactions/:id` - Delete transaction
- `GET /api/categories` - Fetch expense categories
- `POST /api/ai/categorize` - AI-powered categorization
- `GET /api/analytics` - Financial analytics data

## 🛡️ Security Features

- **Authentication**: Secure user authentication with Clerk
- **Data Encryption**: Sensitive data encrypted at rest
- **Input Validation**: Server-side input validation and sanitization
- **Rate Limiting**: API rate limiting to prevent abuse
- **HTTPS**: SSL/TLS encryption for all communications

## 📊 Database Schema

### Key Tables
- **users**: User account information
- **transactions**: Income and expense records
- **categories**: Expense categories
- **budgets**: Budget definitions and limits
- **accounts**: Bank accounts and payment methods



## 🐛 Known Issues

- Receipt scanning accuracy may vary with image quality
- AI categorization requires training data for better accuracy
- Mobile responsiveness needs testing on older devices

## 📞 Support

- **Documentation**: Check the [Wiki](https://github.com/ninja903/ai-expense-tracker/wiki)
- **Issues**: Report bugs in [GitHub Issues](https://github.com/ninja903/ai-expense-tracker/issues)
- **Discussions**: Join [GitHub Discussions](https://github.com/ninja903/ai-expense-tracker/discussions)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Clerk](https://clerk.com/) for authentication services
- [shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [OpenAI](https://openai.com/) for AI capabilities
- [Vercel](https://vercel.com/) for hosting and deployment

---
