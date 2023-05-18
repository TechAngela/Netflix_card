import React, { Children } from 'react'
import Vertical from './Components/Vertical'

export default function MainLayout({ Children }) {
     return (
          <div>
               <div>
                    <Vertical />
               </div>
               <div>
                    {Children}
               </div>
          </div>
     );
}

