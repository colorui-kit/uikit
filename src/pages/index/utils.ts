// import g2cdn from 'github-to-cdn'

export const getPageSourceCodeURL = (page: string): string=> {
  return `${ page }.vue`
  // const linkToObject = g2cdn({
  //   username: 'weilanwl',
  //   repo: 'ColorUI',
  //   path: `Colorui-UniApp/${ page }.vue`,
  //   branch: 'master'
  // })
  // return linkToObject as string
}

export const getSourceCode = (url: string): Promise<string>=> {
  return new Promise(res=> {
    uni.request({
      url: url,
      success(_res) {
        const { data } = _res
        res(data as string)
      },
      fail(_res) {
        res("")
      }
    })
  })
}