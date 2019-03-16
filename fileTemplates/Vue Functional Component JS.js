const name = '${COMPONENT_NAME}'
const props = []
const mixins = []
export default {
  // inheritAttrs: false,
  functional: true,
  name,
  props,
  mixins,
  render(r, context) {
    let classList = context.data.class || {}
    // let listeners = context.listeners || {}

    // attrsToClassName([...stylable.classAttrs, ...props], propsIn, name)
    
    classList = {}
    // classList = {...classList, ... }

    // console.log('on', context)
    let renderData = {
      ...context.data,
      class: {...classList, [name]: true},
      attrs
    }
    // console.log('contextchildren', context.children)

    let rendered =  r('div', renderData, context.children)

    /// mixin.on binds
    /// bindMixins(context, rendered, [router])
    return rendered
  }
}