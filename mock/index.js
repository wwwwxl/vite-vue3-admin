import Mockjs from 'mockjs'

const mockData = [
  {
    url: '/api/films',
    method: 'get',
    response: ({ query }) => {
      const data = Mockjs.mock({
        'films|10': [
          {
            "filmId|+1": 1,
            'name': '@cname'
          }
        ]
      })
      return {
        code: 0,
        msg: 'ok',
        data
      }
    }
  }
]
export default mockData