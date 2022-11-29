import React from 'react'
import { useNavigate } from 'react-router-dom'
import style from './Home.module.css'

const Home = () => {

  const navigate = useNavigate()

  return (
    <main>
      <h2 className={style.title}>My first styles components</h2>
      <h4 className={style.textBody}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere molestiae, cum rerum, natus deserunt laborum illum voluptas aut dolor iste tenetur hic praesentium maiores voluptatum molestias eius minus et fugit?
      </h4>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores accusantium quibusdam alias architecto fugiat rerum inventore dicta itaque laborum perferendis. Veritatis officia, sed nobis ipsa provident dolores? Quibusdam animi nesciunt praesentium pariatur ex a cum. Odio quibusdam cumque sapiente atque? Nihil corporis dolor nobis? Doloremque facilis ad voluptas, beatae, voluptatem itaque aliquam, consequuntur exercitationem cumque quod repudiandae nisi atque? Omnis blanditiis quibusdam expedita id accusantium.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores accusantium quibusdam alias architecto fugiat rerum inventore dicta itaque laborum perferendis. Veritatis officia, sed nobis ipsa provident dolores? Quibusdam animi nesciunt praesentium pariatur ex a cum. Odio quibusdam cumque sapiente atque? Nihil corporis dolor nobis? Doloremque facilis ad voluptas, beatae, voluptatem itaque aliquam, consequuntur exercitationem cumque quod repudiandae nisi atque? Omnis blanditiis quibusdam expedita id accusantium.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores accusantium quibusdam alias architecto fugiat rerum inventore dicta itaque laborum perferendis. Veritatis officia, sed nobis ipsa provident dolores? Quibusdam animi nesciunt praesentium pariatur ex a cum. Odio quibusdam cumque sapiente atque? Nihil corporis dolor nobis? Doloremque facilis ad voluptas, beatae, voluptatem itaque aliquam, consequuntur exercitationem cumque quod repudiandae nisi atque? Omnis blanditiis quibusdam expedita id accusantium.
      </p>
      <article>
        <button onClick={() => navigate('/class')}>Next page</button>
      </article>
    </main>
  )
}

export default Home
