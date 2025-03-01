// import React from "react";
// import { getPosts, getPostDetails } from "../../services";
// import {
//   PostDetail,
//   Categories,
//   PostWidget,
//   Author,
//   Comments,
//   CommentsForm,
// } from "../../components";

// const PostDetails = ({ post }) => {
//   return (
//     <div className="container mx-auto px-10 mb-8">
//       <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
//         <div className="col-span-1 lg:col-span-8">
//           <PostDetail post={post} />
//           <Author  author={post.author}/>
//           <CommentsForm slug={post.slug}/>
//           <Comments slug={post.slug} />
//         </div>
//         <div className="col-span-1 lg:col-span-4">
//           <div className="relative lg:sticky top-8">
//             <PostWidget  slug={post.slug} categories={post.categories.map((category) => category.slug)}/>
//             <Categories />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PostDetails

// export async function getStaticProps({ params }) {
//     const data = await getPostDetails(params.slug);

//     return {
//       props: { posts:data }
//     }
//   }

//   export async function getStaticPaths() {
//     const posts = await getPosts();

//     return {
//         paths: posts.map(({ node: { slug }}) => ({ params: { slug }})),
//          fallback: false, 
//     }
//   }


import React from 'react';
import { PostDetail, Categories, PostWidget, Comments, CommentsForm } from '../../components';
import { getPosts, getPostDetails } from '../../services';
import useGetSinglePost from '../../config/hooks/useGetSinglePost'
import useQuery from '../../config/hooks/useQuery'


const PostDetails = ({ post }) => {
  const id = useQuery('slug')
  const { data } = useGetSinglePost(id)

  return (

    <div className="container mx-auto px-10 mb-8 py-[120px]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          <PostDetail post={data?.data} />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <PostWidget categories={id} />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostDetails;

// Fetch data at build time
// export async function getStaticProps({ params }) {
//   const data = await getPostDetails(params.slug);
//   return {
//     props: {
//       post: data,
//     },
//   };
// }

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
// export async function getStaticPaths() {
//   const posts = await getPosts();
//   return {
//     paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
//     fallback: false,
//   };
// }

// Author,
{/* <Author author={post.author} />
            <CommentsForm slug={post.slug} />
            <Comments slug={post.slug} /> */}