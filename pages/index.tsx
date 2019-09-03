
import { Button } from 'antd'

import Link from 'next/link'

const Index = () => (
  <div>
    <Link href='/about'>
      <Button type='primary'>Go to About Page</Button>
    </Link>
  </div>
)

export default Index
