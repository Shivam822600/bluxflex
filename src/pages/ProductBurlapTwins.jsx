import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import asset_burlap_twins_png_1 from '../assets/images/burlap_twins.png?url';

export default function ProductBurlapTwins() {
    useEffect(() => {
        window.dispatchEvent(new Event('resize'));
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 500);
    }, []);

    return (
        <Layout>
            <div dangerouslySetInnerHTML={{ __html: `<main id="content" class="site-main post-1290 product type-product status-publish has-post-thumbnail hentry product_category-jute-burlap">


	<div class="productDetailsWrapper">
		<div class="productBasicInfo">
			 <!-- Featured Image -->
            <div class="featured-image">
            <img width="800" height="808" src="${asset_burlap_twins_png_1}" class="attachment-large size-large wp-post-image" alt="" decoding="async" srcset="${asset_burlap_twins_png_1} 945w, ${asset_burlap_twins_png_1} 297w, ${asset_burlap_twins_png_1} 768w" sizes="(max-width: 800px) 100vw, 800px">        </div>
    			<div class="product-info">
			                 <div class="page-header">
                    <h1 class="entry-title">Burlap Twins</h1>                </div>
    	                <div class="page-content">
        
        
            </div>
			</div>
		</div>
		


    
		
	</div>

    
</main>` }} />
        </Layout>
    );
}