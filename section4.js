// Section 4: Next.js [Mandatory]
// 1. Coding Challenge: Static Page

// pages/index.js
export async function getStaticProps() {
    const data = require('../data/items.json'); // Assuming you have a JSON file
    return { props: { items: data } };
}

const HomePage = ({ items }) => (
    <ul>
        {items.map((item, index) => (
            <li key={index}>{item.name}</li>
        ))}
    </ul>
);

export default HomePage;

// 2. Conceptual Question: getStaticProps vs getServerSideProps
// getStaticProps runs at build time, and the data is statically generated and served with the page.
// getServerSideProps runs on every request, providing fresh data dynamically but potentially slower than static generation.
