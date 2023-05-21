
const Blogs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Blog</h2>

        <div className="my-8">
          <h3 className="text-lg font-semibold mb-2">What is an access token and refresh token?</h3>
          <p>
            An access token is a credential used to authenticate and authorize requests to access protected resources,
            such as APIs or web services. It is typically a JSON Web Token (JWT) that contains information about the
            users identity and permissions. Access tokens have a limited lifespan and need to be refreshed periodically.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">Compare SQL and NoSQL databases</h3>
          <p>
            SQL (Structured Query Language) databases are based on a relational model and use structured schemas with
            tables, rows, and columns. They are well-suited for structured data and complex queries with joins and
            transactions. NoSQL (Not Only SQL) databases, on the other hand, are non-relational and provide flexible
            schema designs. They are suitable for handling unstructured or semi-structured data and can scale
            horizontally more easily.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">What is Express.js?</h3>
          <p>
            Express.js is a fast and minimalist web application framework for Node.js. It provides a robust set of
            features for building web applications and APIs, including routing, middleware support, template engines,
            and more. Express.js simplifies the process of building server-side applications in JavaScript by providing
            a lightweight and flexible framework.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">What is Nest.js?</h3>
          <p>
            Nest.js is a progressive Node.js framework for building scalable and efficient server-side applications. It
            combines elements of object-oriented programming (OOP), functional programming (FP), and functional
            reactive programming (FRP) to create robust and modular applications. Nest.js leverages TypeScript and
            follows architectural patterns like Dependency Injection (DI) and Decorators to provide a structured and
            maintainable approach to building server-side applications.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-2">What is MongoDB aggregate?</h3>
          <p>
            MongoDBs aggregate is a powerful pipeline-based method used for data aggregation and analysis. It allows
            you to process and transform documents within a collection using a series of stages. Each stage performs
            different operations, such as filtering, grouping, sorting, and computing aggregate values. The aggregate
            framework enables you to perform complex data manipulations and obtain customized results from your MongoDB
            collections.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
