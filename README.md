# GraphQL API Book Search Engine

## Description
A refactored book search engine that transitions from a RESTful API to a GraphQL API using Apollo Server and Client. This application allows users to search for books via the Google Books API and save them to their personal reading list.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [GraphQL Implementation](#graphql-implementation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Deployment](#deployment)
- [Contributing](#contributing)

## Features
- **GraphQL API Integration**
  - Apollo Server implementation
  - Custom resolvers and type definitions
  - GraphQL queries and mutations
- **User Authentication**
  - JWT-based authentication
  - Protected routes and queries
- **Book Management**
  - Search books via Google Books API
  - Save books to personal list
  - Remove books from saved list
- **Responsive Design**
  - Mobile-first approach
  - Clean, intuitive interface

## Technologies Used
### Frontend
- React
- Apollo Client
- TypeScript
- GraphQL
- JWT-decode

### Backend
- Node.js/Express.js
- Apollo Server
- GraphQL
- MongoDB/Mongoose
- JSON Web Tokens

## Installation

1. Clone the repository:
```bash
git clone [your-repo-link]
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file:
```env
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

## GraphQL Implementation

### Queries
```graphql
type Query {
  me: User
}
```

### Mutations
```graphql
type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  saveBook(bookData: BookInput!): User
  removeBook(bookId: ID!): User
}
```

### Type Definitions
```graphql
type User {
  _id: ID!
  username: String!
  email: String!
  bookCount: Int
  savedBooks: [Book]
}

type Book {
  bookId: ID!
  authors: [String]
  description: String
  title: String!
  image: String
  link: String
}

type Auth {
  token: ID!
  user: User
}

input BookInput {
  authors: [String]
  description: String!
  title: String!
  bookId: String!
  image: String
  link: String
}
```

## File Structure
```
book-search-engine/
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── utils/
│   │   ├── App.tsx
│   │   └── index.tsx
│   └── package.json
├── server/
│   ├── schemas/
│   │   ├── index.ts
│   │   ├── resolvers.ts
│   │   └── typeDefs.ts
│   ├── utils/
│   ├── server.ts
│   └── package.json
└── README.md
```

## Usage

1. Start the development server:
```bash
npm run develop
```

2. Access the application at `http://localhost:3000`

3. Test GraphQL queries in Apollo Studio at `http://localhost:3001/graphql`

## API Examples

### Query User Data
```graphql
query {
  me {
    _id
    username
    email
    savedBooks {
      bookId
      title
      authors
    }
  }
}
```

### Save Book Mutation
```graphql
mutation SaveBook($bookData: BookInput!) {
  saveBook(bookData: $bookData) {
    _id
    username
    savedBooks {
      bookId
      title
    }
  }
}
```

## Deployment
This application is deployed on Render. To deploy your own instance:

1. Create a Render account
2. Connect your GitHub repository
3. Configure environment variables
4. Deploy the application

Live Demo: [Your Deployed URL]

## Screenshots
[Add screenshots of your application here]
- Book search interface
- Saved books page
- Login/Signup forms

## Contributing
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
[Choose and include an appropriate license]

## Contact
- Developer: [Your Name]
- GitHub: [Your GitHub Profile]
- Email: [Your Email]
