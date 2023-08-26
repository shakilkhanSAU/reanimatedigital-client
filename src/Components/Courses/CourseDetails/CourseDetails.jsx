import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';

const CourseDetails = () => {
    return (
        <div>
            <Navigation></Navigation>
            <div className="hero h-40 md:h-80" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 mt-16 md:mt-24 text-5xl font-bold">Course Title Here</h1>
                    </div>

                </div>
            </div>

            <div className='flex px-3 md:px-12'>
                <div>
                    <figure>

                    </figure>
                </div>
                <div>
                    <article>
                        <h1 className="mb-5 mt-16 md:mt-24 text-5xl font-bold">Course Title Here</h1>                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non vitae ipsam, unde nisi, quos sint, voluptatem excepturi earum repellat assumenda minima qui magni voluptate reiciendis? Alias autem amet temporibus accusamus molestias quos fuga et molestiae asperiores pariatur laudantium possimus velit, suscipit dolore blanditiis hic voluptatibus sapiente! Provident nam aut eligendi rerum cum, earum ducimus. Alias, repellendus sed eius rem magnam nam, distinctio perspiciatis hic voluptatem corrupti quos commodi pariatur assumenda, eos expedita! Nobis reprehenderit, accusamus explicabo inventore neque ut earum placeat, quisquam laborum perferendis similique repudiandae quae ratione non asperiores assumenda dolore eaque? Eos voluptas provident iusto modi ab dolor itaque repudiandae corporis inventore vel nisi ad quod earum, a doloremque debitis corrupti rem accusamus. Quisquam minus voluptas vel in reiciendis asperiores, eaque cupiditate placeat ullam voluptatibus necessitatibus, saepe alias impedit minima nulla esse, aspernatur non quae quas! Tempore eius illum ducimus tempora ad aliquam esse quod laudantium autem </p>
                        {/* you tube video here */}
                        <div>
                            <iframe  >
                                {/* https://www.youtube.com/embed/ */}
                            </iframe>
                        </div>
                    </article>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default CourseDetails;