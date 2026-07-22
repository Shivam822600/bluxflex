import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import asset_Un_Bags_jpg_1 from '../assets/images/Un-Bags-297x300.jpg?url';

export default function ProductUnBags() {
    useEffect(() => {
        window.dispatchEvent(new Event('resize'));
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 500);
    }, []);

    return (
        <Layout>
            <div dangerouslySetInnerHTML={{ __html: `<main id="content" class="site-main post-851 product type-product status-publish has-post-thumbnail hentry product_category-conductive-bag product_category-fibc">


	<div class="productDetailsWrapper">
		<div class="productBasicInfo">
			 <!-- Featured Image -->
            <div class="featured-image">
            <img width="800" height="808" src="${asset_Un_Bags_jpg_1}" class="attachment-large size-large wp-post-image" alt="" decoding="async" srcset="${asset_Un_Bags_jpg_1} 945w, ${asset_Un_Bags_jpg_1} 297w, ${asset_Un_Bags_jpg_1} 768w" sizes="(max-width: 800px) 100vw, 800px">        </div>
    			<div class="product-info">
			                 <div class="page-header">
                    <h1 class="entry-title">Conductive Bag</h1>                </div>
    	                <div class="page-content">
        <p>Our Conductive Bags are designed to eliminate the risks associated with static electricity during storage and transportation. Made from specialized conductive materials, these bags safely dissipate electrostatic charges, making them ideal for flammable or sensitive materials.</p>
<p>Widely used in chemical and industrial applications, our conductive bags ensure maximum safety, compliance, and peace of mind in environments where static discharge can be hazardous.</p>

        
            </div>
			</div>
		</div>
		


    
		
	</div>

    
</main>` }} />
        </Layout>
    );
}