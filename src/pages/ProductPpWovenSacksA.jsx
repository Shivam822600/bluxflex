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
        <p><strong>BOPP Laminated Woven PP Sacks</strong></p>
<p>BOPP (Biaxially Oriented Polypropylene) is a specialised film stretched in two directions during production, giving it clarity, stiffness, and printability. When laminated onto a woven polypropylene sack, it produces a smooth, glossy surface capable of full-colour graphics and fine print detail — a sharper finish than standard printed sacks.</p>
<p>This is used by brands where shelf presentation matters — premium rice, branded flour, sugar, pet food, animal feed, and specialty seeds. The lamination also adds a moisture barrier, a scuff-resistant surface, and resistance to grease and oils.</p>
<p>BOPP sacks are compatible with automated high-speed filling lines and available in sizes from small retail units to large industrial formats. Multi-colour printing (up to ten colours) is available, with matte and gloss lamination options. Block-bottom and pinch-bottom configurations improve stand-up stability on retail shelves.</p>

        
            </div>
			</div>
		</div>
		


    
		
	</div>

    
</main>` }} />
        </Layout>
    );
}