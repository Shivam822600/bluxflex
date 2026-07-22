import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import asset_cropped_faviocn_1_32x32_png_1 from '../assets/images/cropped-faviocn-1-32x32.png?url';

export default function ProductCategoryUnBagFeed() {
    useEffect(() => {
        window.dispatchEvent(new Event('resize'));
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 500);
    }, []);

    return (
        <Layout>
            <div dangerouslySetInnerHTML={{ __html: `<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:wfw="http://wellformedweb.org/CommentAPI/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:sy="http://purl.org/rss/1.0/modules/syndication/" xmlns:slash="http://purl.org/rss/1.0/modules/slash/">

<channel>
	<title>UN Bag Archives - Bulk Flex Private Limited</title>
	<atom:link href="/product_category/un-bag/feed/" rel="self" type="application/rss+xml">
	<link>/product_category/un-bag/
	<description></description>
	<lastbuilddate>Fri, 22 May 2026 10:03:10 +0000</lastbuilddate>
	<language>en-US</language>
	<sy:updateperiod>
	hourly	</sy:updateperiod>
	<sy:updatefrequency>
	1	</sy:updatefrequency>
	<generator>https://wordpress.org/?v=7.0.2</generator>

<img>
	<url>${asset_cropped_faviocn_1_32x32_png_1}</url>
	<title>UN Bag Archives - Bulk Flex Private Limited</title>
	<link>/product_category/un-bag/
	<width>32</width>
	<height>32</height>
 
</atom:link></channel>
</rss>
` }} />
        </Layout>
    );
}