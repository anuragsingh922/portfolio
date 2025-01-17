const projects = () => {
  const projects = [
    {
      id: 1,
      name: "InteractIQ — Smart Web AI Interaction System ",
      short: "IQ",
      videoURL: "https://www.youtube.com/embed/wafoPtnWngs",
      description: `The **InteractIQ** is a sophisticated, human-like communication platform that simulates real conversations using advanced AI technologies. It allows users to speak directly to the system via their microphone, and the AI listens, understands, and responds based on the context of the conversation. This system leverages the **MERN stack (MongoDB, Express, React, Node.js)** for a full-stack solution, ensuring a seamless and efficient interaction between the frontend and backend components.
  
  By utilizing **Deepgram's Speech-to-Text (STT)** on the server side, the system accurately transcribes user speech into text. This text is then processed using a **Large Language Model (LLM)** to generate appropriate responses based on the user's input. The response is converted back into audio using **Text-to-Speech (TTS)** technology and is played in the frontend, creating a real-time, dynamic conversation experience.`,
      features: `
  
  - **1. Human-like Interruption Handling**
  
  The AI can detect and handle interruptions just like a real person. When the user speaks mid-conversation while the AI is responding, the system immediately halts its output to listen to the user's new query. This makes the interaction flow more naturally and provides a more engaging user experience.
  
  - **2. Dynamic End-of-Speech (EoS) Detection**
  
  Unlike typical AI systems that wait for extended silences before responding, the Web AI Calling System uses a novel Dynamic EoS mechanism. This feature intelligently predicts whether the user has completed their input, eliminating unnecessary delays and making responses quicker and more natural.
  
  - **3. Flexible Topic Engagement**  
  
  Users can direct the AI to converse on specific topics, making it possible to engage the AI on diverse subjects. This topic-specific interaction is especially useful for educational purposes, customer service applications, or focused discussions in professional settings.
  
  - **4. Real-Time Query Processing and Response**  
  
  The system uses asynchronous handling of both STT and LLM requests, ensuring quick response times. This architecture minimizes latency, allowing for smooth, uninterrupted conversations.
  
  -  **5. WebSocket-Based Real-Time Communication**  
The system leverages WebSockets to establish persistent, real-time communication channels between the frontend and backend. This allows the AI to process and respond to user queries with minimal delay, enhancing the conversational flow. The WebSocket connection ensures that all audio and text data is transmitted seamlessly, enabling the AI to detect interruptions and changes in user input in real-time.
  `,
      technical: `
  - **Frontend**:  React.js handles the user interface, capturing the user's audio and displaying the AI's responses in real-time.
  
  - **Backend**:   Node.js with Express.js is used for server-side processing. Deepgram's STT service is integrated to transcribe speech into text, while a pre-trained Large Language Model processes and generates contextual responses.
  
  - **Database**:  MongoDB is used for storing user session data, ensuring that interactions can be context-aware and persistent.
  
  - **Audio Handling**:  Text responses generated by the LLM are sent to a TTS service for real-time audio conversion, which is then streamed back to the frontend.`,
      status: "Completed",
    },
    {
      id: 2,
      name: "PhotoCloud",
      short: "PC",
      website: "https://photocloud922.vercel.app",
      gitrepoF: "https://github.com/anuragsingh922/photos-frontend",
      gitrepoB: "https://github.com/anuragsingh922/photos-backend",
      videoURL: "https://www.youtube.com/embed/0i8vqYf_5aE",
      description: `**PhotoCloud** is a robust, user-friendly platform that offers secure storage and streaming of media files. It allows users to upload, view, and manage their photos and videos with the confidence that their data is protected by industry-standard security measures. This system leverages the **MERN stack (MongoDB, Express, React, Node.js)** for a comprehensive full-stack solution, providing a seamless integration between the frontend and backend components.
  
  By utilizing **MongoDB's GridFS** for media storage, the system efficiently handles large photo and video files. The GridFS mechanism allows for real-time media streaming, ensuring that users can start viewing content as soon as the first portion of the file is received, without waiting for the entire file to load. This progressive loading technique creates a fast and engaging user experience.
  
  The web app incorporates **JWT-based authentication** to ensure secure access and **password hashing** to protect user credentials, bringing the security level on par with professional platforms. With **Tailwind CSS** for styling, the application offers a modern, responsive UI that adapts beautifully to all device types, providing users with an optimal experience whether they are on a desktop or a mobile device.
  `,
      features: `**1. Advanced Media Storage and Retrieval**  
   The application utilizes MongoDB's GridFS to store photos and videos in the database, ensuring efficient storage and retrieval of large media files. This setup allows for quick access to files, regardless of size or format, making it ideal for managing extensive media libraries.
  
  **2. Secure User Authentication and Authorization**  
   The web app implements secure authentication and authorization mechanisms using JWT (JSON Web Tokens). Passwords are hashed before storage to provide an additional layer of security, ensuring that user data is protected against unauthorized access. These features bring the application to a level of security comparable to that of professional websites.
  
  **3. Real-Time Media Streaming**  
   Instead of waiting for the entire photo or video file to load from the server, users can start viewing as soon as a portion of the file is received. This is made possible through real-time streaming of media files, reducing wait times and offering a smooth playback experience. As images and videos progressively load, they become visible, providing a faster and more engaging user experience.
  
  **4. Responsive UI with Tailwind CSS**  
   The user interface is built using Tailwind CSS, providing a sleek and modern design. Pages like the signup and login pages are fully responsive and adapt seamlessly across devices, ensuring an optimal experience whether users are on desktops, tablets, or smartphones.
  
  **5. Efficient Media Management**  
   Users can upload, view, and delete photos and videos, with all interactions securely managed in the database. The application supports a range of media formats and offers smooth navigation between different media categories.
  
  **6. Scalable Architecture**  
   The app is designed with a scalable architecture to handle increasing volumes of user data. The use of MongoDB's bucket storage enables efficient handling of file metadata, while Node.js ensures fast processing of requests, making it suitable for deployment in production environments.
  `,
      technical: `
  - **Frontend** : The frontend is built with React.js and styled using Tailwind CSS. The responsive design provides a consistent and polished look, with smooth transitions and interactions.
  
  - **Backend** : Node.js and Express.js are used for backend processing. JWT is integrated for secure user authentication, while password hashing ensures that sensitive user information is stored securely.
  
  - **Database** : MongoDB's GridFS bucket is used for storing media files, ensuring efficient storage and retrieval of large photos and videos. This setup allows for partial retrieval and streaming of files, reducing load times.
  
  - **Media Streaming** : Media files are streamed in real-time as they are retrieved from the database. This feature enhances the user experience by allowing users to view images and videos progressively, without waiting for the entire file to be downloaded.
  
  - **Security** : User data is secured using industry-standard practices like password hashing and JWT-based authentication. Each API request is authenticated and authorized to prevent unauthorized access, ensuring that user media files remain secure.
  `,
      status: "Completed",
    },
    {
      id: 3,
      name: "Darwin 🤖 - AI Software Engineer Intern",
      short: "DR",
      gitrepo: "https://github.com/Cognation/darwin",
      videoRef:
        "https://www.loom.com/share/25403d395ed7453998a08b780647acad?sid=64e16979-ae76-4dbc-8e07-3194b435f29f",
      description: `The **Darwin 🤖 - AI Software Engineer Intern** is a sophisticated platform designed for the training, testing, and deployment of deep learning models. It offers an intuitive interface for users to build, manage, and scale machine learning models with ease. This system leverages modern web technologies to provide a seamless and efficient interaction for machine learning enthusiasts and professionals alike.
  
  This project was developed during my internship at **Accintia**, where I served as the **Full Stack Lead**. In this role, I was responsible for designing and implementing the frontend interface, ensuring a smooth and engaging user experience. I also contributed to the backend by handling some simple Python tasks, collaborating with the team to integrate various services and functionalities.`,
      features: `
  
  - **1. Intuitive Model Management**
  
  Darwin offers a user-friendly interface to create, edit, and manage machine learning models. The platform allows users to upload datasets, define model parameters, and track training progress in real-time.
  
  - **2. GPU Acceleration Support**
  
  Users can leverage GPU support to speed up the training process, significantly reducing the time required for model training and experimentation. The platform automatically detects and utilizes available GPU resources.
  
  - **3. Advanced Hyperparameter Tuning**
  
  Darwin includes advanced tools for hyperparameter tuning, allowing users to optimize their models for the best performance. This feature includes automated searches, grid search, and random search capabilities.
  
  - **4. Real-Time Training Visualization**
  
  The platform provides real-time visualizations of model training, including loss curves, accuracy metrics, and more, making it easier to understand model performance during the training process.
  
  - **5. Model Deployment and Testing**  
  
  Darwin enables users to deploy trained models and perform testing on live data. The system provides endpoints for model inference, making it simple to integrate with other applications for production use.
  
  `,
      technical: `
  - **Frontend**:  React.js is used for the user interface, providing dynamic visualizations and interactive elements for managing and visualizing the models and their training progress.
  
  - **Backend**:   Python is used for server-side processing. The backend handles tasks like data ingestion, model training, and hyperparameter tuning using libraries like TensorFlow and PyTorch.
  
  - **Database**:  PickelDB is used to store user data, model configurations, and training logs. This ensures data persistence and allows users to track their progress across multiple sessions.
  
  - **Cloud Integration**:  The platform can integrate with cloud services like AWS or Google Cloud for resource-intensive training tasks, enabling users to leverage cloud GPUs and storage solutions.
  
  `,
      status: "Completed",
    },
    {
      id: 4,
      name: "Vision GPT",
      short: "VG",
      videoURL: "https://www.youtube.com/embed/nwU6Xcc5cS4",
      website: "https://vision-gpt-frontend.vercel.app/",
      gitrepoF: "https://github.com/anuragsingh922/visionGPT-frontend",
      gitrepoB: "https://github.com/anuragsingh922/visionGPT-backend",
      description: `The **Intelligent Image and Web Query System** is an innovative application that combines image recognition and web-based information retrieval, offering users a powerful tool to query and obtain answers related to provided images. Built using the **MERN stack (MongoDB, Express, React, Node.js)**, this project seamlessly integrates AI-powered vision capabilities with real-time web scraping to deliver accurate and up-to-date information.
  
  The system allows users to upload an image and ask questions related to its content, similar to **ChatGPT Vision**. It uses a **Large Language Model (LLM)** to analyze the image and provide context-aware responses. If the LLM does not have sufficient knowledge or requires real-time information, it dynamically performs an **internet search** to gather relevant data. 
  
  Unlike traditional scraping mechanisms, this system leverages a unique approach by using **Puppeteer** to take high-resolution screenshots of webpages instead of extracting raw HTML content. This method enables the LLM to interpret both text and image-based information on the webpage, ensuring that no critical data is missed, especially when visual content is part of the answer. Users can also view the captured screenshots in the frontend, enhancing transparency and providing a visual reference for the obtained information.`,
      features: `**1. AI-Powered Image Recognition and Query Handling**  
   Users can upload images and ask detailed questions about them. The system leverages the LLM's vision capabilities to analyze the image content, providing precise answers based on the visual elements.
  
  **2. Dynamic Internet Search Integration**  
   If the LLM lacks the required knowledge to answer a question, the system performs a real-time internet search. It formulates an optimized search query and scrapes the relevant webpage for information.
  
  **3. Innovative Screenshot-Based Scraping**  
   Unlike conventional scraping, the system uses **Puppeteer** to take screenshots of webpages instead of extracting raw HTML data. This approach allows the AI to interpret and understand both text and image-based content, making it capable of handling complex webpages with multimedia elements.
  
  **4. Visual Feedback in the Frontend**  
   The frontend displays the screenshots captured by Puppeteer, giving users a clear view of the webpages accessed and the information sources used by the system to formulate responses.
  
  **5. Comprehensive Query Processing and Web Scraping**  
   The system uses advanced techniques to determine the most relevant sections of a webpage, ensuring efficient extraction of required data. This is particularly useful for acquiring information from news articles, research papers, or other structured content sources.
  
  **6. Scalable and Secure Architecture**  
   The backend is designed to handle a high volume of queries and web scraping requests concurrently. With secure user authentication and protected data handling, the application ensures that all user data and queries remain private and protected.`,
      technical: `- **Frontend** : Built with React.js, the frontend allows users to upload images, view captured screenshots, and interact with the AI in real-time. The UI is designed to be user-friendly and responsive, providing a seamless experience across devices.
  
  - **Backend** : The backend is powered by Node.js and Express.js. It integrates a pre-trained LLM for image analysis and query handling. When required, Puppeteer is used to capture screenshots of relevant webpages for LLM-based analysis.
  
  - **Database** : MongoDB is used to store user sessions and image data, enabling the application to maintain context and provide accurate, context-aware responses.
  
  - **Web Scraping and Puppeteer Integration** : The system uses Puppeteer to capture webpage screenshots, which are then sent to the LLM for deeper analysis. This method ensures that the AI can understand both text and visual information, providing a more complete understanding of the content.
  
  - **Internet Search Capabilities** : The application formulates optimized search queries for real-time information retrieval. It can handle a wide range of queries, from general knowledge to time-sensitive data.`,
      status: "Completed",
    },
    {
      id: 5,
      name: "WebInsight",
      short: "WB",
      api: "**API Endpoint :** https://webscraper-a392.onrender.com/internet",
      parameters: `**Parameters** :

Here is the JSON format for the data sent to the API in the body:


\`\`\`json
{
  "query": "Taj Mahal"
   // Replace "Taj Mahal" with the text you want to search for
}
  \`\`\`

    `,
      videoURL: "https://www.youtube.com/embed/fAshTS5XYMY",
      description: `The **Web Content Scraping and Ranking API** is an advanced tool designed to scrape web content and rank URLs based on their relevance to a user-provided query. When a user provides a search term, such as "Taj Mahal," the API performs a Google search, scrapes the content from the top URLs, and ranks these URLs based on the importance of the information they contain. The API returns both the ranked URLs and the extracted content, making it an invaluable resource for applications that require context-aware web content retrieval and ranking.
  
  This project was developed using **Flask** and was hosted on **Render** to enable easy integration with any client or server-side application. The API can be used via platforms like Postman or integrated directly as an endpoint in applications.`,
      features: `
  
  - **1. Query-Based Web Content Retrieval**
  
  The API takes a user query as an input and performs a Google search to find the top 10 URLs. It then scrapes the content from these URLs and extracts relevant information to return the most useful content to the user.
  
  - **2. Content Ranking Using BM25**
  
  The API uses the BM25 algorithm to rank the content based on relevance to the query. This ensures that the returned URLs and content snippets are highly relevant and contain the most informative data.
  
  - **3. Real-Time Web Scraping**
  
  The system leverages multi-threading to perform web scraping in real-time, reducing the latency of content retrieval and improving response times.
  
  - **4. Support for JSON Output**
  
  The API outputs the ranked URLs and content in a structured JSON format, making it easy for other applications to consume and display the results.
  
  - **5. Hosted on Render for Easy Access** 
  
  The API is hosted on **Render**, making it publicly accessible and easy to integrate with various platforms and tools like Postman. Users can make POST requests to the API with the "query" parameter to get the desired results.
  
  `,
      technical: `
  - **Frontend**:  The project does not have a traditional frontend but is designed to work seamlessly with tools like Postman or other clients that can send POST requests. It also returns structured JSON data for integration with any frontend.
  
  - **Backend**:   The backend is built using **Flask**, a lightweight Python web framework. The scraping is handled using the **requests** and **BeautifulSoup** libraries, while content ranking is done using the **BM25Okapi** module.
  
  - **Ranking Algorithm**:  The content ranking is implemented using **BM25**, which scores the relevance of the scraped content based on the query. The ranked content is then used to identify the most relevant URLs.
  
  - **Concurrency**:  Multi-threading is used with the **concurrent.futures** module to enable concurrent scraping, which improves the speed and efficiency of the API.
  
  - **Deployment**:  The API is hosted on **Render**, a cloud platform that supports easy deployment of Flask applications with minimal configuration.
  
  `,
      status: "Completed",
    },
    {
      id: 6,
      name: "MailEase",
      short: "ME",
      api: `**API Endpoint :** https://send-mails-0lz7.onrender.com`,
      mediumText: "Read the detailed article about MailEase on Medium",
      mediumlink:
        "https://medium.com/@anuragsingh922/send-emails-via-api-without-complex-integration-549fcedf897d",
      parameters: `**Parameters** :

Here is the JSON format for the data sent to the API in the body:

\`\`\`json
{
  "toEmails": "recipient@example.com", // Replace with the recipient's email address
  "companyName": "Your Company Name", // Replace with your company or personal name
  "subject": "Test Email",
  "textMessage": "Hello, this is a test message.",
  "fromEmail": "your-email@gmail.com", // Replace with your email address
  "fromPassword": "your-app-password" // Replace with the generated app password
}
\`\`\`
`,
      description: `The **MailEase** is a powerful tool designed to simplify the process of sending emails for developers. By leveraging **Nodemailer**, this API enables users to send emails quickly and effortlessly, eliminating the complexities of email integration. With a simple POST request, developers can implement email functionality in their applications, saving time and ensuring reliable communication. This project adheres to industry security standards, keeping your email credentials safe and secure, allowing you to focus on building great features without worrying about email delivery logistics.

  This API can be integrated into any application stack, providing a versatile solution for sending emails for notifications, alerts, and user communications. Whether you're a seasoned developer or a student working on a project, MailEase empowers you to streamline email integration.`,
      features: `
  
  - **1. Simplified Email Sending**
  
The API provides an intuitive interface to send emails with just a few lines of code, allowing developers to focus on their application logic rather than the complexities of email protocols.
  
  - **2. Built on Nodemailer**
  
Utilizing the **Nodemailer** library, the API supports sending emails via various transport options, including SMTP, and offers rich features like HTML content, attachments, and inline images.
  
  - **3. Secure Credentials Handling**
  
The API ensures that your email and app password remain confidential and secure, following best practices to prevent credential exploitation.
  
  - **4. JSON Output**
  
Responses are returned in structured JSON format, making it easy for developers to handle the output programmatically and integrate seamlessly with their applications.
  
  - **5. Ready for Quick Integration**  
  
With a simple API endpoint, developers can implement email functionality in minutes, greatly reducing the time spent on setup and configuration.
  
  - **6. Ideal for Students and Developers**  
  
Whether you are working on personal projects, academic assignments, or enterprise-level applications, MailEase provides a user-friendly solution for efficient email communication.
  
  `,
      technical: `
  - **Frontend**: The project does not require a traditional frontend, as it is designed for use with any client capable of making HTTP requests. Users can easily test the API using tools like Postman.

  - **Backend**: Built on **Node.js** and **Express**, the backend utilizes **Nodemailer** to manage email sending. The API handles all necessary configurations and logic to facilitate the email delivery process.

  - **Email Transport Options**: The API supports multiple transport options through Nodemailer, including SMTP, allowing it to send emails exclusively to Gmail accounts.

  - **Security Measures**: Implemented security measures ensure that email credentials are never exposed. The API follows the best practices to safeguard sensitive information.

  - **Deployment**: The API is hosted on **Render**, a cloud platform that provides a robust environment for running Node.js applications with minimal configuration.
  
  `,
      status: "Completed",
    },
    {
      id: 7,
      name: "TourSync",
      short: "TS",
      website: "https://tour-sync-frontend.vercel.app/",
      gitrepoF: "https://github.com/anuragsingh922/tourSync-frontend",
      gitrepoB: "https://github.com/anuragsingh922/tourSync-backend",
      // videoURL: "https://www.youtube.com/embed/your-demo-video-id",
      description: "**TourSync** is a comprehensive travel platform designed to provide users with an intuitive and engaging experience for exploring and booking holiday packages. Developed as part of an internship assessment for Exploro Club, TourSync simplifies the process of discovering exciting trips, managing bookings, and making secure payments. The platform is powered by a modern tech stack, ensuring reliability and scalability while delivering a seamless user experience.",
      features: `**User Features**  
       - *Browse Trips* : Explore a variety of trips with detailed descriptions, pricing, itineraries, and images.  
       - *Add to Cart* : Save selected trips for future booking or checkout.  
       - *Secure Payments* : Leverage integrated payment gateways for a smooth and secure transaction process.  
       - *Manage Booked Trips* : Access and review trip details, including cancellation options.  
       - *Detailed Trip Information* : View comprehensive details about trips to make informed decisions.  
       \n**Organizer Features**  
       -  *Post Trips* : Create and list new trips with all necessary details.  
       -  *Modify Trips* : Update trip information, including descriptions, images, and pricing.           
       -  *Delete Trips* : Remove trips from the platform when no longer available.  
       \n**Website Flow**:   
       - *Landing Page* : A visually appealing overview of the platform, featuring available trips.  
       - *Trips Page* : Explore, filter, and select trips based on category, destination, and date.  
       - *Cart* : Review trips added to the cart before proceeding to checkout.  
       - *My Bookings* : Manage and review all booked trips, with options for cancellations or modifications.`,
      technical: `**Frontend**:  
      - Built using **React.js** for dynamic and responsive user interfaces.  
      - **Redux** for global state management.  
      - **React Router** for seamless navigation and routing.  
      - **Axios** for efficient API calls to the backend.  
      - **Material-UI** for modern and consistent styling.  
      - **Payment Gateway Integration** (e.g., Stripe) for secure online transactions.
      \n**Backend**:  Developed with **Node.js** and **Express.js** for robust backend server capabilities.  
      **Database**: MongoDB as the primary database for storing trip, user, and booking information.  
      **Session Managment**: JWT Tokens for secure user authentication and session management.  
      **Payment**: Payment Gateway API for handling payment processing and bookings.  
`,
      "status": "Completed"
    },
    {
      id: 8,
      name: "ShopEase",
      short: "SE",
      website: "https://shopease922.vercel.app",
      // videoURL: "https://www.youtube.com/embed/your-demo-video-id",
      description: "**TourSync** is a comprehensive travel platform designed to provide users with an intuitive and engaging experience for exploring and booking holiday packages. Developed as part of an internship assessment for Exploro Club, TourSync simplifies the process of discovering exciting trips, managing bookings, and making secure payments. The platform is powered by a modern tech stack, ensuring reliability and scalability while delivering a seamless user experience.",
      features: `**User Features**  
       - *Browse Products* : Explore products with detailed descriptions, pricing, color, and images.   
       - *Add to Cart* : Save selected trips for future booking or checkout.    
       - *Add to Wishlist* : Save your favourite product for future booking or checkout.    
       - *Detailed Product Information* : View comprehensive details about trips to make informed decisions.   
       \n**Website Flow**:   
       - *Landing Page* : A visually appealing overview of the platform, featuring available products.  
       - *Cart* : Review your favourite products before proceeding to checkout.  
       - *Wishlist* : Review products added to the cart before proceeding to checkout.  
       - *Orders* : See all the orders made with all the datails status , price etc.`,
      technical: `**Frontend**:  
      - Built using **React.js** for dynamic and responsive user interfaces.  
      - **Redux** for global state management.  
      - **React Router** for seamless navigation and routing.  
      - **Axios** for efficient API calls to the backend.  
      - **Shadcn** for modern and consistent styling.  
      \n**Backend**:  Developed with **Node.js** and **Express.js** for robust backend server capabilities.  
      **Database**: MongoDB as the primary database for storing trip, user, and booking information.  
      **Session Managment**: JWT Tokens for secure user authentication and session management.
`,
      "status": "Completed"
    },
  ];

  return projects;
};

export default projects;
