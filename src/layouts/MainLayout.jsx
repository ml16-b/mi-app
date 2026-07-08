import { Outlet, Link } from 'react-router';

export default function MainLayout() {
    return (
        <div className='layout-principal'>
            <nav>
                <Link to="/">Home</Link> | <Link to="/blog">Blog</Link>
            </nav>

            <hr />

            <main>
                <Outlet />
            </main>

            <footer>2026 Footer</footer>
        </div>
    );
}