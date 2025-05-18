        import React from 'react';

        function App() {
        return (
            <div className="bg-gray-50 text-gray-800 min-h-screen">
            {/* Navbar */}
            <header className="bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-indigo-600">Job Jennies</h1>
                <nav className="space-x-6">
                    <a href="#" className="hover:text-indigo-600">HomePage</a>
                    <a href="#" className="hover:text-indigo-600">Jobs</a>
                    <a href="#" className="hover:text-indigo-600">Employers</a>
                    <a href="#" className="hover:text-indigo-600">Contact</a>
                </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section className="text-center py-20 bg-indigo-50">
                <h2 className="text-4xl font-bold text-indigo-700 mb-4">Find Your Dream Job Today</h2>
                <p className="text-gray-600 mb-8">Join thousands of professionals finding their career path through Job Jennies.</p>
                <a href="/jobs" className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition">Browse Jobs</a>
            </section>

            {/* Features Section */}
            <section className="max-w-6xl mx-auto py-16 px-4 grid md:grid-cols-3 gap-10">
                <FeatureCard title="Easy Search" desc="Smart filters & recommendations to find the perfect job." />
                <FeatureCard title="Trusted Employers" desc="We connect you with verified and top-rated employers." />
                <FeatureCard title="Quick Apply" desc="Apply in one click and track application status easily." />
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-6 text-center">
                <p>&copy; {new Date().getFullYear()} Job Jennies. All rights reserved.</p>
            </footer>
            </div>
        );
        }

        const FeatureCard = ({ title, desc }) => (
        <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-indigo-600">{title}</h3>
            <p className="text-gray-600 mt-2">{desc}</p>
        </div>
        );

        export default App;
        // This is a simple React component that uses Tailwind CSS for styling.