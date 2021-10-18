import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import './Layout.css'

const Layout = ({ children }) => (
    <main className="App">
        <Header />
        { children }
        <Footer />
    </main>
)

export default Layout;