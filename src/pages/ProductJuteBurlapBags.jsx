import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import asset_juteburlap_bags_png_1 from '../assets/images/juteburlap_bags.png?url';
import asset_juteburlap_bags_300x300_png_2 from '../assets/images/juteburlap_bags-300x300.png?url';

export default function ProductJuteBurlapBags() {
    useEffect(() => {
        window.dispatchEvent(new Event('resize'));
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 500);
    }, []);

    return (
        <Layout>
            <div dangerouslySetInnerHTML={{ __html: `<main id="content" class="site-main post-2211 product type-product status-publish has-post-thumbnail hentry product_category-jute-burlap">


	<div class="productDetailsWrapper">
		<div class="productBasicInfo">
			 <!-- Featured Image -->
            <div class="featured-image">
            <img width="800" height="800" src="${asset_juteburlap_bags_png_1}" class="attachment-large size-large wp-post-image" alt="" decoding="async" srcset="${asset_juteburlap_bags_png_1} 800w, ${asset_juteburlap_bags_300x300_png_2} 300w, ${asset_juteburlap_bags_png_1} 150w, ${asset_juteburlap_bags_png_1} 768w" sizes="(max-width: 800px) 100vw, 800px">        </div>
    			<div class="product-info">
			                 <div class="page-header">
                    <h1 class="entry-title">Jute &amp; Burlap Bags</h1>                </div>
    	                <div class="page-content">
        <p>No synthetic material replicates what natural burlap does in the hand. Its texture, weight, and warmth communicate sustainability through physical sensation — before the customer reads a word of what is printed on it. Jute bags are kept, reused, and displayed. They travel beyond the point of sale and carry the brand into every environment they reach. They are among the most commercially successful and most genuinely loved retail bag formats in the global market.</p>
<p><strong>➤ Jute Shopping Bag :-</strong><br>
Woven hessian burlap in natural tan or dyed colours, with natural jute cord handles or padded cotton handles for improved carrying comfort. Available flat or with a gusseted base. Print in up to four colours using water-based inks on the burlap surface.</p>
<p>The natural jute cord and natural fabric combination delivers a consistent material story from base to handle — everything about the bag says the same thing. For brands whose positioning centres on natural, sustainable, or artisan values, there is no more credible physical expression of that positioning than a well-made natural jute bag.</p>
<p><strong>Fabric:</strong> Natural hessian burlap&nbsp; <strong>Handles:</strong> Natural jute cord · Padded cotton tape&nbsp; <strong>Base:</strong> Flat or gusseted&nbsp; <strong>Print:</strong> Up to 4 colours · 1 or 2 sides&nbsp; <strong>Colour Options:</strong> Natural tan and dyed colours available — full colour range&nbsp; <strong>Custom Sizes:</strong> Yes&nbsp; <strong>Best For:</strong> Artisan food, organic and natural brands, specialty coffee and tea, gift retail, farmers markets, corporate gifting, festival merchandise</p>
<p><strong>➤ Laminated Jute Bag — Wipe-Clean Interior :-</strong><br>
The same natural burlap exterior — same texture, same feel, same brand communication — with a smooth PP laminate bonded to the interior surface. The outside is completely unchanged. The inside wipes clean and resists moisture, food residue, and staining from repeated use.</p>
<p>For food retail, grocery, wine, and any application where the bag will carry products that generate moisture or leave residue — this is the jute bag specification that performs for the long term. A bag that cleans easily is a bag that is used again and again, which is the performance outcome that makes a reusable bag commercially and environmentally worthwhile.</p>
<p>Exterior: Natural or dyed burlap — unchanged Interior: PP laminate — smooth, wipeable, food-safe Handles: Natural jute cord · Padded cotton tape Print: Up to 4 colours on exterior Colour Options: Natural and dyed colour range available Custom Sizes: Yes Best For: Grocery, food retail, bakeries, wine retail, hospitality gifting, any application where hygiene and reusability must coexist</p>

        
            </div>
			</div>
		</div>
		


    
		
	</div>

    
</main>` }} />
        </Layout>
    );
}