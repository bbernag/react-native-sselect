
  

# react-native-sselect

 
A Customizable React Native Select
 

## Installation

  
  

```sh

npm  install  react-native-sselect

```

  

--- or ---

  

```sh

yarn  add  react-native-sselect

```

  

  

## Usage

Currently you have to wrap your form with `SelectProvider` this will handle to toggle selects when you have more than one.

  

```js

  

import { Select, SelectProvider } from  'react-native-sselect';

export default function  App() {
	return (
		<View  style={styles.container}>
			<SelectProvider>
				<Select
				name="sample"
				options={[
					{ label: "Option 1", value: "option1" },
					{ label: "Option 2", value: "option2" },
				]} />
			</SelectProvider>
		</View>
	);
}

  

const  styles  = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});

```

  
## Props

| Name | Type | Required |

| --- | --- | --- |

| name | string | yes |

| options | {name: string; value: string }[] | yes |

| onChange | ({name: string; value: string }) ⇒ void | yes |

| defaultValue | {name: string; value: string } | |

| selectedValue | {name: string; value: string } | |

| optionsPlaceholder | string | |

| optionsHeight | number | |

| color | string | |

| backgroundColor | string | |

| placeholder | string | |

| selectedOptionContainerStyle | style | |

| optionsContainerStyle | | |

| optionsStyle | | |




## Contributing

  

  

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

  

  

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)