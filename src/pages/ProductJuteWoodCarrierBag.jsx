import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import asset_jute_wood_carrier_bag_png_1 from '../assets/images/jute_wood_carrier_bag.png?url';

export default function ProductJuteWoodCarrierBag() {
    useEffect(() => {
        window.dispatchEvent(new Event('resize'));
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 500);
    }, []);

    return (
        <Layout>
            <div dangerouslySetInnerHTML={{ __html: `<main id="content" class="site-main post-1299 product type-product status-publish has-post-thumbnail hentry product_category-jute-burlap">


	<div class="productDetailsWrapper">
		<div class="productBasicInfo">
			 <!-- Featured Image -->
            <div class="featured-image">
            <img width="800" height="808" src="${asset_jute_wood_carrier_bag_png_1}" class="attachment-large size-large wp-post-image" alt="" decoding="async" srcset="${asset_jute_wood_carrier_bag_png_1} 945w, ${asset_jute_wood_carrier_bag_png_1} 297w, ${asset_jute_wood_carrier_bag_png_1} 768w" sizes="(max-width: 800px) 100vw, 800px">        </div>
    			<div class="product-info">
			                 <div class="page-header">
                    <h1 class="entry-title">Jute Wood Carrier Bag</h1>                </div>
    	                <div class="page-content">
        <p><strong>Rustic Strength. Refined Purpose.</strong></p>
<p>Our Jute Wood Carrier Bag is a heavy-duty, eco-friendly bag designed to carry firewood, logs, and timber with ease and natural elegance. Crafted from thick, tightly woven jute/burlap fabric, it delivers the rugged strength needed for rough and heavy materials while offering a warm, rustic aesthetic that appeals to modern eco-conscious consumers.</p>
<p>The sturdy construction withstands the sharp edges and weight of wood, making it a practical daily-use product for households, outdoor enthusiasts, and retailers. The open-weave fabric naturally allows dust and debris to fall through, keeping spaces clean during use. Reinforced handles ensure a safe, comfortable grip even when fully loaded.</p>
<p>Fully biodegradable and reusable, the Jute Wood Carrier Bag is an ideal alternative to plastic or synthetic carriers popular with eco-lifestyle brands, home décor retailers, and camping product suppliers worldwide.</p>
<p><strong>Ideal For:</strong> Firewood carrying, log storage, indoor fireplace use, outdoor and camping, home décor retail, eco-lifestyle product lines.</p>
<p><strong>Key Features:</strong></p>
<p>Heavy-duty jute/burlap construction for maximum strength Reinforced handles for safe, comfortable carrying Open weave allows dust and debris to fall through naturally 100% biodegradable and reusable Natural rustic look — perfect for retail and gifting Available in custom sizes and branded options for bulk export</p>

        
            </div>
			</div>
		</div>
		


    
		
	</div>

    
</main>` }} />
        </Layout>
    );
}