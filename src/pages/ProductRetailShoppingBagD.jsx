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
        <p><strong>The Bag That Works As Hard As Your Business</strong></p>
<p>Ask any retailer what they want from a shopping bag and the answer is always the same something strong, something affordable, and something that keeps coming back. That is exactly what our PP Shopping Bags deliver, every single time.</p>
<p>Made from woven polypropylene, these bags are built to handle the weight of real shopping not just a couple of light items, but full grocery runs, heavy purchases, and daily use without giving way. They do not absorb water, they do not tear easily, and they hold their shape no matter how roughly they are handled. For a retailer, that kind of reliability is priceless.</p>
<p>What makes PP Shopping Bags truly stand out in the retail space is how well they work as a branding tool. The smooth woven surface takes high-quality, full-colour printing beautifully your logo, your colours, your message, printed sharp and vivid, staying that way through hundreds of uses. Every time a customer reuses the bag, they are carrying your brand around with them. That is marketing you do not have to pay for twice.</p>
<p>They are lightweight to carry, easy to store flat in bulk, and fully recyclable which increasingly matters to customers and governments alike as plastic bans expand across global markets. Available in a wide range of sizes, finishes including laminated or non-laminated, and fully customisable for bulk export orders.</p>
<p><strong>Ideal For:</strong> Supermarkets, grocery stores, fashion retail, pharmacies, promotional giveaways, trade events, and branded retail chains.</p>

        
            </div>
			</div>
		</div>
		


    
		
	</div>

    
</main>` }} />
        </Layout>
    );
}