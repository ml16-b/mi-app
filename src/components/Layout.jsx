function Layout({ sidebar, content, footer }) {
    return (
        <div className="layout-grid">
            <aside className="zona-sidebar">{sidebar}</aside>

            <main className="zona-main">{content}</main>

            <footer className="zona-footer">{footer}</footer>
        </div>
    );
}

export default Layout;