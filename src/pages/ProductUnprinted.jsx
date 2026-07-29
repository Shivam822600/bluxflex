import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import asset_with_liners_png_1 from '../assets/images/official/with-liners.png?url';

export default function ProductUnprinted() {
    useEffect(() => {
        window.dispatchEvent(new Event('resize'));
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 500);
    }, []);

    return (
        <Layout>
            <div dangerouslySetInnerHTML={{ __html: `<main id="content" class="site-main post-1489 product type-product status-publish has-post-thumbnail hentry product_category-pp-woven-sacks">


	<div class="productDetailsWrapper">
		<div class="productBasicInfo">
			 <!-- Featured Image -->
            <div class="featured-image">
            <img width="800" height="808" src="${asset_with_liners_png_1}" class="attachment-large size-large wp-post-image" alt="" decoding="async" srcset="${asset_with_liners_png_1} 945w, ${asset_with_liners_png_1} 297w, ${asset_with_liners_png_1} 768w" sizes="(max-width: 800px) 100vw, 800px">        </div>
    			<div class="product-info">
			                 <div class="page-header">
                    <h1 class="entry-title">PP Woven Sack With Liner</h1>                </div>
    	                <div class="page-content">
        <p><strong>Two Layers of Protection. Zero Compromise.</strong></p>
<p>Some products need more protection than a standard woven bag alone can provide — fine powders that can drift through a standard weave, hygroscopic materials that draw in moisture as humidity rises, and food ingredients that need to arrive unchanged from when they left the factory.</p>
<p>The PP Woven Sack with Liner addresses this with a straightforward two-layer design. The outer layer is the same tough, load-bearing woven polypropylene that handles the physical demands of stacking, transport, and handling. The inner layer — a polyethylene liner, either loosely inserted or sewn into the sack — seals the contents from moisture, fine-particle loss, and outside contamination.</p>
<p>This dual-layer construction is the reason liner sacks are the standard choice across food processing, pharmaceuticals, chemicals, and fertiliser manufacturing. A flour mill packing for export cannot risk moisture compromising a 50 kg batch. A fertiliser producer cannot afford caking that blocks dispensing equipment at the other end. A chemical company cannot accept fine particle leakage in transit. The liner layer removes all of these risks cleanly and cost-effectively, without adding unnecessary complexity to the packing line.</p>
<p>PE liners are available in HDPE, LDPE, and LLDPE formulations depending on the level of rigidity, flexibility, and barrier performance required. Liner thickness is customisable. The outer sack can be printed, laminated, or plain giving complete flexibility across both protection and presentation. Sewn-in and loose-insert liner options are both available to suit different packing operations.</p>

        
            </div>
			</div>
		</div>
		


    
		
	</div>

    
</main>` }} />
        </Layout>
    );
}