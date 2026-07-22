import React, { useEffect } from 'react';
import Layout from '../components/Layout';


export default function ContactUs() {
    useEffect(() => {
        window.dispatchEvent(new Event('resize'));
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 500);
    }, []);

    return (
        <Layout>
            <div dangerouslySetInnerHTML={{ __html: `
<a href="/contact-us-2"><h3>Click here...</h3></a>





` }} />
        </Layout>
    );
}