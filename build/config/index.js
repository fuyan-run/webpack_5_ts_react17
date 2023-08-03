const conf = {
    port: 1016,
    description: '测试开发组件'
}

const base = {
}

conf.dev = {
    ...base,
    name: 'dev'
}

conf.test = {
    ...base,
    name: 'test'
}

conf.uat = {
    ...base,
    name: 'uat'
}

conf.prod = {
    ...base,
    name: 'prod'
}

module.exports = conf;
