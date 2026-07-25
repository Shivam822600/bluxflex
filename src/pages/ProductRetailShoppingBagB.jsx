import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import asset_bulk11_png_1 from '../assets/images/bulk11.png?url';
import asset_bulk11_297x300_png_2 from '../assets/images/bulk11-297x300.png?url';

export default function ProductRetailShoppingBagB() {
    useEffect(() => {
        window.dispatchEvent(new Event('resize'));
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 500);
    }, []);

    return (
        <Layout>
            <div dangerouslySetInnerHTML={{ __html: `<main id="content" class="site-main post-877 product type-product status-publish has-post-thumbnail hentry product_category-retail-shoping-bags">


	<div class="productDetailsWrapper">
		<div class="productBasicInfo">
			 <!-- Featured Image -->
            <div class="featured-image">
            <img width="800" height="808" src="${asset_bulk11_png_1}" class="attachment-large size-large wp-post-image" alt="" decoding="async" srcset="${asset_bulk11_png_1} 945w, ${asset_bulk11_297x300_png_2} 297w, ${asset_bulk11_png_1} 768w" sizes="(max-width: 800px) 100vw, 800px">        </div>
    			<div class="product-info">
			                 <div class="page-header">
                    <h1 class="entry-title">White Bleached Flat Handle</h1>                </div>
    	                <div class="page-content">
        <p><strong>White Bleached Flat Handle Bag</strong></p>
<p>Bleached to a clean, bright white, this bag offers a different presentation compared to natural kraft — the white surface supports vivid colours and sharp print detail. Commonly used by fashion retailers, cosmetic brands, and jewellery stores.</p>
<p>The flat handle sits neatly at the top of the bag without added bulk, giving a clean, uncluttered look compared to twisted or rope handles.</p>
<p>Made from high-grade bleached kraft paper, these bags stand flat on the bottom, load easily, and stack neatly. Fully recyclable and biodegradable.</p>
<p>Available in multiple sizes with options for gloss or matte lamination, hot foil stamping, and full-colour custom printing.</p>
<p><strong>Ideal For:</strong> Fashion boutiques, cosmetics and skincare brands, jewellery stores, gift packaging, luxury retail, department stores, and lifestyle brands.</p>

        
            </div>
			</div>
		</div>
		


    
		
	</div>

    
</main>` }} />
        </Layout>
    );
}