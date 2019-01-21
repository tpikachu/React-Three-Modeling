import React, { Component } from 'react'
import * as THREE from 'three'
import OrbitControls from 'three-orbitcontrols'

                
class TextureLoaderExample extends Component {
  componentDidMount() {
    const width = this.mount.clientWidth
    const height = this.mount.clientHeight
    
    //scene
    const scene = new THREE.Scene()
    scene.background = new THREE.Color( 0x8FBCD4 );

    //camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    camera.position.z = 4

    //renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setClearColor('#000000')

    //geometry
    const geometry = new THREE.BoxBufferGeometry(1, 1, 1)
    
    //add Directlight
    var dirLight = new THREE.DirectionalLight( 0xffffff, 2 );
            dirLight.color.setHSL( 0.1, 1, 0.95 );
            dirLight.position.set( - 1, 1.75, 1 );
            dirLight.position.multiplyScalar( 30 );
            scene.add( dirLight );
            dirLight.castShadow = true;
            dirLight.shadow.mapSize.width = 2048;
            dirLight.shadow.mapSize.height = 2048;
    var d = 50;
            dirLight.shadow.camera.left = - d;
            dirLight.shadow.camera.right = d;
            dirLight.shadow.camera.top = d;
            dirLight.shadow.camera.bottom = - d;
            dirLight.shadow.camera.far = 3500;
            dirLight.shadow.bias = - 0.0001;
    var	dirLightHeper = new THREE.DirectionalLightHelper( dirLight, 10 );
            scene.add( dirLightHeper );


    //Load model
    const texture = new THREE.TextureLoader().load( 'textures/texture.jpg' );
    texture.anisotropy = 16;
    
    // create a Standard material using the texture we just loaded as a color map
    const material = new THREE.MeshStandardMaterial( {
        map: texture,
    } );
    const mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );

    //add orbit
    const orbit = new OrbitControls( camera, renderer.domElement );
    scene.add(orbit);


    //set this. valuable
    this.scene = scene
    this.camera = camera
    this.renderer = renderer
    this.mesh = mesh
    //response for changing window size
    window.addEventListener('resize', this.handleResize)

    this.mount.appendChild(this.renderer.domElement)
    this.start()
  }

  componentWillUnmount() {
    window.removeEventListener('resize',  this.handleResize)
    this.stop()
    this.mount.removeChild(this.renderer.domElement)
  }

  handleResize = () => {
    
    const width = this.mount.clientWidth
    const height = this.mount.clientHeight
    
    this.renderer.setSize(width, height)
    this.camera.aspect = width / height
    this.camera.updateProjectionMatrix()
  }

  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
    }
  }

  stop = () => {
    cancelAnimationFrame(this.frameId)
  }

  animate = () => {
    this.mesh.rotation.x += 0.01
    this.mesh.rotation.y += 0.01

    this.renderScene()
    this.frameId = window.requestAnimationFrame(this.animate)
  }

  renderScene = () => {
    this.renderer.render(this.scene, this.camera)
  }

  render() {
    return (
      <div
        style={{ width: '100%', height: 'calc(100vh - 100px)' }}
        ref={mount => {
          this.mount = mount
        }}
      />
    )
  }
}

export default TextureLoaderExample
