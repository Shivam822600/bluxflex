import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import asset_jute_sacks_png_1 from '../assets/images/jute-sacks.png?url';

export default function ProductJuteSacks2() {
    useEffect(() => {
        window.dispatchEvent(new Event('resize'));
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 500);
    }, []);

    return (
        <Layout>
            <div dangerouslySetInnerHTML={{ __html: `<main id="content" class="site-main post-1555 product type-product status-publish has-post-thumbnail hentry product_category-jute-burlap">


	<div class="productDetailsWrapper">
		<div class="productBasicInfo">
			 <!-- Featured Image -->
            <div class="featured-image">
            <img width="800" height="808" src="${asset_jute_sacks_png_1}" class="attachment-large size-large wp-post-image" alt="" decoding="async" srcset="${asset_jute_sacks_png_1} 945w, ${asset_jute_sacks_png_1} 297w, ${asset_jute_sacks_png_1} 768w" sizes="(max-width: 800px) 100vw, 800px">        </div>
    			<div class="product-info">
			                 <div class="page-header">
                    <h1 class="entry-title">Jute Sacks</h1>                </div>
    	                <div class="page-content">
        <p><strong>Strong. Breathable. Built for Bulk.</strong></p>
<p>Our Jute Sacks are the go-to packaging solution for industries that demand strength without compromising sustainability. Made from 100% natural jute fibers, these sacks offer exceptional load bearing capacity, breathability, and durability making them ideal for storing and transporting bulk goods across the supply chain.</p>
<p>Unlike plastic bags, the breathable weave of jute prevents moisture buildup and mold growth, keeping contents fresh and safe during long-distance shipping. They are fully biodegradable, decomposing naturally without leaving any harmful residue in the environment.</p>
<p>Widely trusted by exporters in agriculture, food processing, and industrial sectors, our Jute Sacks are available in a range of sizes and weight capacities. Custom sizing, stitching styles, and branding options are available for bulk orders.</p>
<p><strong>Ideal For:</strong> Grains, rice, wheat, coffee beans, cocoa, spices, pulses, fertilizers, seeds, and industrial raw materials.<br>
<strong>Key Features:</strong> 100% natural and biodegradable High load-bearing capacity (up to 100 kg) Breathable weave prevents mold and moisture damage Durable for rough handling and long-distance transport Available in custom sizes and branded options Eco-compliant for EU, USA, and international markets</p>

        
            </div>
			</div>
		</div>
		


    
		
	</div>

    
</main>` }} />
        </Layout>
    );
}