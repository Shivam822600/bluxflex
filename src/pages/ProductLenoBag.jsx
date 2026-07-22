import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import asset_leno_bag_jpg_1 from '../assets/images/leno-bag.jpg?url';
import asset_leno_bag_jpeg_2 from '../assets/images/leno-bag-297x300.jpeg?url';

export default function ProductLenoBag() {
    useEffect(() => {
        window.dispatchEvent(new Event('resize'));
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 500);
    }, []);

    return (
        <Layout>
            <div dangerouslySetInnerHTML={{ __html: `<main id="content" class="site-main post-1734 product type-product status-publish has-post-thumbnail hentry product_category-leno-bags-febric">


	<div class="productDetailsWrapper">
		<div class="productBasicInfo">
			 <!-- Featured Image -->
            <div class="featured-image">
            <img width="800" height="808" src="${asset_leno_bag_jpg_1}" class="attachment-large size-large wp-post-image" alt="" decoding="async" srcset="${asset_leno_bag_jpeg_2} 945w, ${asset_leno_bag_jpeg_2} 297w, ${asset_leno_bag_jpeg_2} 768w" sizes="(max-width: 800px) 100vw, 800px">        </div>
    			<div class="product-info">
			                 <div class="page-header">
                    <h1 class="entry-title">Leno Bag</h1>                </div>
    	                <div class="page-content">
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>

        
            </div>
			</div>
		</div>
		


    
		
	</div>

    
</main>` }} />
        </Layout>
    );
}