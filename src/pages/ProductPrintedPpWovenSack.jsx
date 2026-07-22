import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import asset_printed_pp_woven_sack_upto_six_colors_png_1 from '../assets/images/printed-pp-woven-sack-upto-six-colors.png?url';
import asset_printed_pp_woven_sack_upto_six_colors_297x300_png_2 from '../assets/images/printed-pp-woven-sack-upto-six-colors-297x300.png?url';

export default function ProductPrintedPpWovenSack() {
    useEffect(() => {
        window.dispatchEvent(new Event('resize'));
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 500);
    }, []);

    return (
        <Layout>
            <div dangerouslySetInnerHTML={{ __html: `<main id="content" class="site-main post-1491 product type-product status-publish has-post-thumbnail hentry product_category-pp-woven-sacks">


	<div class="productDetailsWrapper">
		<div class="productBasicInfo">
			 <!-- Featured Image -->
            <div class="featured-image">
            <img width="800" height="808" src="${asset_printed_pp_woven_sack_upto_six_colors_png_1}" class="attachment-large size-large wp-post-image" alt="" decoding="async" srcset="${asset_printed_pp_woven_sack_upto_six_colors_png_1} 945w, ${asset_printed_pp_woven_sack_upto_six_colors_297x300_png_2} 297w, ${asset_printed_pp_woven_sack_upto_six_colors_png_1} 768w" sizes="(max-width: 800px) 100vw, 800px">        </div>
    			<div class="product-info">
			                 <div class="page-header">
                    <h1 class="entry-title">Printed PP Woven Sack</h1>                </div>
    	                <div class="page-content">
        <p><strong>Your Brand, Carried by Every Sack</strong></p>
<p>Packaging has always done two jobs protect the product and represent the brand. The Printed PP Woven Sack does both with equal confidence.</p>
<p>Built on the same strong woven polypropylene foundation that makes PP sacks the most widely used industrial packaging in the world, the printed version adds something powerful on top: visibility. Every sack becomes a branded surface. Your logo, your product name, your colours, your handling instructions printed directly onto the woven fabric with precision, durability, and clarity that holds up throughout the entire supply chain.</p>
<p>This is not just about looking good on a shelf. In bulk commodity markets grain, rice, flour, fertiliser, animal feed, seeds, and more a clearly printed sack communicates trust. It tells a buyer immediately what is inside, where it came from, and who stands behind it. On a warehouse floor stacked with competing products, a well-printed sack stands apart in seconds. That kind of instant recognition has real commercial value, and businesses that understand it treat their sack printing as seriously as any other part of their brand strategy.</p>
<p>Our printed PP woven sacks are produced using flexographic and rotogravure printing techniques, supporting up to eight colours for crisp, photographic-quality graphics. Custom sizes, GSM ratings, laminated and unlaminated options, and a range of closure styles are available. Whether you are packing 10 kg retail units or 50 kg industrial loads, the result is packaging that works hard and looks sharp doing it.</p>

        
            </div>
			</div>
		</div>
		


    
		
	</div>

    
</main>` }} />
        </Layout>
    );
}