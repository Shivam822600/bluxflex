import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import asset_cooler_bags_jpg_1 from '../assets/images/cooler_bags.jpg?url';
import asset_cooler_bags_jpeg_2 from '../assets/images/cooler_bags.jpeg?url';

export default function ProductCoolerBags() {
    useEffect(() => {
        window.dispatchEvent(new Event('resize'));
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 500);
    }, []);

    return (
        <Layout>
            <div dangerouslySetInnerHTML={{ __html: `<main id="content" class="site-main post-2197 product type-product status-publish has-post-thumbnail hentry product_category-retail-shoping-bags">


	<div class="productDetailsWrapper">
		<div class="productBasicInfo">
			 <!-- Featured Image -->
            <div class="featured-image">
            <img width="800" height="800" src="${asset_cooler_bags_jpg_1}" class="attachment-large size-large wp-post-image" alt="" decoding="async" srcset="${asset_cooler_bags_jpeg_2} 800w, ${asset_cooler_bags_jpeg_2} 300w, ${asset_cooler_bags_jpeg_2} 150w, ${asset_cooler_bags_jpeg_2} 768w" sizes="(max-width: 800px) 100vw, 800px">        </div>
    			<div class="product-info">
			                 <div class="page-header">
                    <h1 class="entry-title">Cooler Bags</h1>                </div>
    	                <div class="page-content">
        <p>A cooler bag is a promise from retailer to customer — that the quality of what they bought is protected all the way to their refrigerator. For grocery, specialty food, beverage, meal kit, and pharmaceutical retail, it is a functional requirement and a brand statement simultaneously. A well-made branded cooler bag that a customer keeps and reuses delivers brand exposure on every subsequent trip — one of the highest-return packaging investments available in retail.</p>
<p><strong>Soft-Shell Cooler Bag :-</strong><br>
PP woven or polyester outer shell with PEVA, aluminium foil, or EPE foam insulated inner lining. Lightweight, foldable, and reusable. Temperature retention of 4 to 8 hours under standard ambient conditions. The format consumers keep longest and reuse most often — making it the most cost-effective branded bag format per brand impression delivered. Available with BOPP lamination for premium print. Dyed colour options across all shell materials.</p>
<p><strong>Outer:</strong> PP woven · Non-woven · Polyester&nbsp; <strong>Insulation:</strong> PEVA · Aluminium foil · EPE foam&nbsp; <strong>Temperature Retention:</strong> 4–8 hours&nbsp; <strong>Closure:</strong> Zip · Velcro · Drawstring&nbsp; <strong>Handles:</strong> Flat sewn · Shoulder strap <strong>Print:</strong> Up to 4 colours · BOPP matte or gloss for premium finish&nbsp; <strong>Colour </strong><strong>Options:</strong> Full range — dyed colour options available&nbsp; <strong>Custom Sizes:</strong> Yes&nbsp; <strong>Best For:</strong> Grocery and supermarket, food retail, specialty food, beverage retail, pharmaceutical cold chain, meal kit packaging, outdoor and beach retail, corporate gifting</p>
<p><strong>Structured Hard-Shell Cooler Bag :-</strong><br>
Rigid foam-insulated construction with food-safe wipeable interior — up to 24 hours temperature retention with ice pack. For pharmaceutical cold chain, premium food delivery, catering supply, and corporate gifting where the bag is the gift as much as what is inside it.&nbsp; <strong>Temperature Retention:</strong> Up to 24 hours with ice pack&nbsp; <strong>Interior:</strong> Food-safe PEVA or aluminium foil — wipeable <strong>Closure: </strong>Heavy-duty zip <strong>Handles:</strong> Padded carry · Shoulder strap&nbsp; <strong>Branding:</strong> Screen print · Embroidery · Woven label&nbsp; &nbsp;<strong>Custom Sizes:</strong> Yes&nbsp; &nbsp;<strong>Best For: </strong>Pharmaceutical cold chain, premium grocery delivery, meal kit supply, corporate wine and gourmet food gifting</p>

        
            </div>
			</div>
		</div>
		


    
		
	</div>

    
</main>` }} />
        </Layout>
    );
}