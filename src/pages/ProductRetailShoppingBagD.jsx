import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import asset_PP_shopping_bag_jpg_1 from '../assets/images/PP-shopping-bag.jpg?url';
import asset_PP_shopping_bag_297x300_jpg_2 from '../assets/images/PP-shopping-bag-297x300.jpg?url';

export default function ProductRetailShoppingBagD() {
    useEffect(() => {
        window.dispatchEvent(new Event('resize'));
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 500);
    }, []);

    return (
        <Layout>
            <div dangerouslySetInnerHTML={{ __html: `<main id="content" class="site-main post-881 product type-product status-publish has-post-thumbnail hentry product_category-retail-shoping-bags">


	<div class="productDetailsWrapper">
		<div class="productBasicInfo">
			 <!-- Featured Image -->
            <div class="featured-image">
            <img width="800" height="808" src="${asset_PP_shopping_bag_jpg_1}" class="attachment-large size-large wp-post-image" alt="" decoding="async" srcset="${asset_PP_shopping_bag_jpg_1} 945w, ${asset_PP_shopping_bag_297x300_jpg_2} 297w, ${asset_PP_shopping_bag_jpg_1} 768w" sizes="(max-width: 800px) 100vw, 800px">        </div>
    			<div class="product-info">
			                 <div class="page-header">
                    <h1 class="entry-title">PP Shopping Bags</h1>                </div>
    	                <div class="page-content">
        <p><strong>PP Shopping Bags</strong></p>
<p>Made from woven polypropylene, these bags are built to handle the weight of everyday shopping, including heavier purchases and repeated use. They resist water absorption and tearing, and hold their shape under regular handling.</p>
<p>The smooth woven surface supports high-quality, full-colour printing that holds up over repeated use, which makes them a common choice as a reusable branding tool for retailers.</p>
<p>Lightweight to carry, easy to store flat in bulk, and recyclable. Available in a range of sizes and finishes, including laminated or non-laminated, and customisable for bulk export orders.</p>
<p><strong>Ideal For:</strong> Supermarkets, grocery stores, fashion retail, pharmacies, promotional giveaways, trade events, and branded retail chains.</p>

        
            </div>
			</div>
		</div>
		


    
		
	</div>

    
</main>` }} />
        </Layout>
    );
}