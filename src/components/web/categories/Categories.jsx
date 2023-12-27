import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';

function Categories() {
  const getCategories = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/categories/active?limit=70`);
    return data;
  };

  const { data, isLoading } = useQuery('web_categories', getCategories);

  if (isLoading) {
    return <h2>LOADING........</h2>;
  }




    // const [categories, setCategories] = useState([]);
  // const[loading,setloading] = useState(true);
  // const getCategories = async () => {
  //   try {
  //     const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/categories`);
  //     setCategories(data.categories);
  //     // setloading(false);
  //   } catch (error) {
  //     console.error('Error fetching categories:', error);
  //     // setloading(false);
  //   }finally {
  //     setloading(false);
  //   }
  // };

  // useEffect(() => {
  //   getCategories();
  // }, []);

  // if(loading) {
  //   return <h2>LOADING........</h2>
  // }

  // return (
  //   <div className="container">
  //     <div className="row">
  //       {data ? (data?.categories.length ? (
  //           data.categories.map((category) => (
  //             <div className="col-lg-4" key={category._id}>
  //               <img src={category.image.secure_url} alt="" />
  //               {/* <h2>{category.name}</h2> */}
  //             </div>
  //           ))
  //         ) : (
  //           <h2>No category found</h2>
  //         )
  //       ) : (
  //         <h2>No data available</h2>
  //       )}
  //     </div>
  //   </div>


return (
  <Swiper
    
    modules={[Navigation, Pagination,Autoplay]}
    
    slidesPerView={4.5}
    navigation
    pagination={{ clickable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    loop={true}
    autoplay={{
      delay:2000
    }}
  >
    {data?.categories.length ? data.categories.map((category) => (
     
    <SwiperSlide key={category._id}><Link to={`/products/category/${category._id}`}><img src={category.image.secure_url} alt="" className='p-5' /> </Link></SwiperSlide>
   
   )):'<h2>No data available</h2>'}

    
  </Swiper>
);

}

export default Categories;
