# Overview

This project takes some input and based upon that it randomly displays data in a table. It also save the input and maintains a past query table where a user can easily from upto max 5 previous queries and view the result.
It also has a table list feature where a can easily view the table along with its description and attributes.

## Frameworks and Packages used 

**Frameworks**
1) Reactjs- React is a JavaScript library for building user interfaces. Developed and maintained by Facebook, it allows developers to create reusable UI components that can efficiently update and render based on the application's state. React follows a declarative approach, making it easier to understand and debug. It is widely used for building single-page applications (SPAs) and is known for its virtual DOM, which optimizes rendering performance.

**Libraries**
1) Material UI-Material-UI is a popular React UI framework that implements Google's Material Design principles. It provides a set of customizable and well-designed React components for building modern, responsive, and visually appealing user interfaces. Material-UI components are built with flexibility and customization in mind, making it easy for developers to create consistent and beautiful UIs that adhere to Material Design standards.
   
2) Papaparse-PapaParse is a powerful and easy-to-use JavaScript library for parsing CSV (Comma-Separated Values) data. It can handle large CSV files and provides features like automatic type inference, custom delimiters, and asynchronous parsing. PapaParse is often used in web applications to parse CSV data received from files or APIs and convert it into a usable format for further processing or display.

## Page Load Time and measurement metrics

![image](https://github.com/Aviral-tech/atlan-frontend-dashboard-/assets/72295671/ca9c787b-03a8-4a48-b433-a5208a06afeb)

![image](https://github.com/Aviral-tech/atlan-frontend-dashboard-/assets/72295671/dccf3ec7-6591-4cc9-a90c-f3a6e0603eff)

![image](https://github.com/Aviral-tech/atlan-frontend-dashboard-/assets/72295671/4903c58e-8541-4510-bdea-d2ca82681343)

Measured the load time of application through Pagespeed Insights:
https://pagespeed.web.dev/analysis/https-quiet-sunflower-77cf49-netlify-app/0s2of1czwd?form_factor=desktop 

## Optimizations

1)Code Splitting:
Implemented code splitting to split JavaScript bundle into smaller chunks. This helps in loading only the necessary code for the current view, reducing the initial load time.









