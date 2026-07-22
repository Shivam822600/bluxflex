import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import asset_bopp_sacks_png_1 from '../assets/images/bopp-sacks.png?url';

export default function ProductPpWovenSacksA() {
    useEffect(() => {
        window.dispatchEvent(new Event('resize'));
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 500);
    }, []);

    return (
        <Layout>
            <div dangerouslySetInnerHTML={{ __html: `<main id="content" class="site-main post-1088 product type-product status-publish has-post-thumbnail hentry product_category-pp-woven-sacks">


	<div class="productDetailsWrapper">
		<div class="productBasicInfo">
			 <!-- Featured Image -->
            <div class="featured-image">
            <img width="800" height="808" src="${asset_bopp_sacks_png_1}" class="attachment-large size-large wp-post-image" alt="" decoding="async" srcset="${asset_bopp_sacks_png_1} 945w, ${asset_bopp_sacks_png_1} 297w, ${asset_bopp_sacks_png_1} 768w" sizes="(max-width: 800px) 100vw, 800px">        </div>
    			<div class="product-info">
			                 <div class="page-header">
                    <h1 class="entry-title">Bopp Sacks</h1>                </div>
    	                <div class="page-content">
        <p><strong>Where Industrial Strength Meets Retail Ambition</strong></p>
<p>Most packaging has to choose be strong or look good. The BOPP Sack refuses to make that trade-off, and that refusal is exactly why it has become the packaging of choice for premium agricultural and food products worldwide.</p>
<p>BOPP stands for Biaxially Oriented Polypropylene a specialised film that is stretched in two directions during production, giving it exceptional clarity, stiffness, and printability. When this film is laminated onto a woven polypropylene sack, the result is a bag with a smooth, glossy surface that can hold photographic-quality graphics, bold full-colour branding, and fine product detail with a sharpness that standard printed sacks simply cannot match. Set one BOPP sack next to a standard printed sack on a retail shelf and the difference is immediate and undeniable.</p>
<p>This matters enormously in markets where the consumer makes a purchase decision based on what they see on the shelf premium rice brands, branded flour, quality sugar, pet food, animal feeds, and specialty seeds all compete for attention at the point of sale. The BOPP sack gives brands the visual platform to win that competition. It also adds a moisture barrier, a scuff-resistant surface, and excellent protection against grease and oils making it as practical as it is attractive.</p>
<p>BOPP sacks are compatible with automated high-speed filling lines and are available in a range of sizes from small retail units to large industrial formats. Multi-colour printing of up to ten colours is available, with matte and gloss lamination options. Block-bottom and pinch-bottom configurations give BOPP sacks excellent stand-up stability on retail shelves, reinforcing the premium presentation from every angle.</p>
<p>For brands that take their packaging seriously, the BOPP sack is not an upgrade it is the standard they should be working to.</p>

        
            </div>
			</div>
		</div>
		


    
		
	</div>

    
</main>` }} />
        </Layout>
    );
}