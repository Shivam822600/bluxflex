import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import asset_cotton_bags_jpg_1 from '../assets/images/cotton_bags.jpg?url';
import asset_cotton_bags_jpeg_2 from '../assets/images/cotton_bags.jpeg?url';

export default function ProductCottonBags() {
    useEffect(() => {
        window.dispatchEvent(new Event('resize'));
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 500);
    }, []);

    return (
        <Layout>
            <div dangerouslySetInnerHTML={{ __html: `<main id="content" class="site-main post-2209 product type-product status-publish has-post-thumbnail hentry product_category-retail-shoping-bags">


	<div class="productDetailsWrapper">
		<div class="productBasicInfo">
			 <!-- Featured Image -->
            <div class="featured-image">
            <img width="800" height="800" src="${asset_cotton_bags_jpg_1}" class="attachment-large size-large wp-post-image" alt="" decoding="async" srcset="${asset_cotton_bags_jpeg_2} 800w, ${asset_cotton_bags_jpeg_2} 300w, ${asset_cotton_bags_jpeg_2} 150w, ${asset_cotton_bags_jpeg_2} 768w" sizes="(max-width: 800px) 100vw, 800px">        </div>
    			<div class="product-info">
			                 <div class="page-header">
                    <h1 class="entry-title">Cotton Bags</h1>                </div>
    	                <div class="page-content">
        <p>Cotton tote bags are washable, durable, and reusable indefinitely. They are the retail bag consumers keep longest, use most often, and associate most strongly with the brand they received them from. For retailers building a sustainable packaging programme, the cotton tote delivers brand exposure long after the original sale — with every subsequent use.</p>
<p><strong>Cotton Tote Bag :-&nbsp;</strong><br>
Two panels of woven cotton fabric with two handles — the most widely used reusable bag format in global retail. Available in natural unbleached cotton, bleached white, and dyed colours across the full range. Print in up to four colours on one or two sides using water based fabric inks.</p>
<p>Available flat or with a gusseted base. The flat tote is the standard format for retail, events, and promotional programmes. The gusseted base adds significant volume capacity and produces a stable, self-standing bag under load — the correct specification for grocery carry, market shopping, and any application where what goes inside is as important as what is printed outside.</p>
<p><strong>Fabric:</strong> Natural cotton · Bleached white&nbsp; <strong>Weight:</strong> 140 GSM – 280 GSM — lighter for promotional use, heavier for long-service carry bags&nbsp; <strong>Handles:</strong> Cotton tape — length, width, and colour custom <strong>Base Options:</strong> Flat · Gusseted (8 cm, 10 cm, 12 cm depth — custom on request)&nbsp; <strong>Print:</strong> Up to 4 colours · 1 or 2 sides · Screen print or heat transfer&nbsp; <strong>Colour Options:</strong> Natural, bleached white, and dyed colour range available&nbsp; <strong>Custom Sizes:</strong> Yes&nbsp; <strong>Best For:</strong> Retail, grocery carry, markets, events, corporate gifting, brand giveaways, sustainable packaging programmes</p>

        
            </div>
			</div>
		</div>
		


    
		
	</div>

    
</main>` }} />
        </Layout>
    );
}