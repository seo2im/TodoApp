## Typescript environment setting

#### package
```
npm install -D typescript @types/jest @types/react @types/react-native @types/react-test-renderer
```

#### tsconfig.json / jest.config.json
[tsconfig.json]()
[jest.config.json]()

## Caustion

### 1. Animatied in styled component
```javascript
const View = styled.view``

<View as={Animated.View} style={{ /* Animate Style */}}>
```
