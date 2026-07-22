import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import asset_printed_pp_woven_sack_upto_six_colors_png_1 from '../assets/images/printed-pp-woven-sack-upto-six-colors.png?url';
import asset_printed_pp_woven_sack_upto_six_colors_297x300_png_2 from '../assets/images/printed-pp-woven-sack-upto-six-colors-297x300.png?url';

export default function ProductPrintOptions() {
    useEffect(() => {
        window.dispatchEvent(new Event('resize'));
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 500);
    }, []);

    return (
        <Layout>
            <div dangerouslySetInnerHTML={{ __html: `<main id="content" class="site-main post-2296 product type-product status-publish has-post-thumbnail hentry product_category-pp-woven-sacks">


	<div class="productDetailsWrapper">
		<div class="productBasicInfo">
			 <!-- Featured Image -->
            <div class="featured-image">
            <img width="800" height="808" src="${asset_printed_pp_woven_sack_upto_six_colors_png_1}" class="attachment-large size-large wp-post-image" alt="" decoding="async" srcset="${asset_printed_pp_woven_sack_upto_six_colors_png_1} 945w, ${asset_printed_pp_woven_sack_upto_six_colors_297x300_png_2} 297w, ${asset_printed_pp_woven_sack_upto_six_colors_png_1} 768w" sizes="(max-width: 800px) 100vw, 800px">        </div>
    			<div class="product-info">
			                 <div class="page-header">
                    <h1 class="entry-title">Print Options</h1>                </div>
    	                <div class="page-content">
        <p>All woven PP bags are available with direct print on the woven fabric in up to four colours. UV-stable, abrasion-resistant inks are applied to the outer face of the bag. Available on one or two sides.</p>
<p>Standard print content: brand name and logo, product name and grade, net weight, country of origin, handling and storage instructions, certification marks, batch or lot codes, regulatory information.</p>
<p>Artwork files are accepted in AI, EPS, or high-resolution PDF format. Print screens are set up at the factory at order placement and retained permanently for all repeat orders no re setup charge, no lead time delay on reorders.</p>
<p><strong>Print Colours:</strong> Up to 4&nbsp; <strong>Print Sides:</strong> 1 or 2 sides&nbsp; <strong>Ink:</strong> UV-stable, abrasion-resistant&nbsp; <strong>Artwork Formats:</strong> AI · EPS · PDF (300 dpi minimum)&nbsp; <strong>Repeat Orders:</strong> Screens retained at factory no re-setup charge</p>
<p>➤&nbsp;<strong>BOPP Print Finish – Photographic Quality</strong></p>
<p>Direct print on woven PP is functional. BOPP print is commercial.</p>
<p>BOPP laminated bags carry reverse-printed BOPP film bonded to the outer woven surface. The print sits protected between the film and the fabric, fully shielded from handling damage. The result is photographic-quality imagery smooth colour gradients, sharp fine text, vivid brand colours, and a high-gloss or matte surface finish that no direct-print woven PP bag can replicate.</p>
<p>The commercial impact is measurable. In retail environments where a consumer is choosing between products in similar bags at similar prices, print quality signals product quality. A BOPP bag communicates premium. A faded, rough-surface direct-print bag communicates commodity. The difference in bag cost per unit is small. The difference in shelf conversion rate is not.</p>
<p><strong>Print Method:</strong> Reverse print on BOPP film, laminated to woven PP&nbsp; <strong>Quality:</strong> Photographic full colour, fine detail, smooth gradients&nbsp; <strong>Surface:</strong> High gloss standard; matte available&nbsp; <strong>Protection:</strong> Fully protected between laminate and fabric&nbsp; <strong>Best For:</strong> Retail rice, flour, sugar, pet food, animal feed, seed, any product where brand presentation at retail directly drives sales volume</p>

        
            </div>
			</div>
		</div>
		


    
		
	</div>

    
</main>` }} />
        </Layout>
    );
}