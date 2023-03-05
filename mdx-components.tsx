type Component = {
	children: any;

	[key: string]: any;
}

function H1({ children }: Component) {
	return <h1 className="text-4xl">{children}</h1>
}

export function useMDXComponents(components: Record<string, any>) {
	return {...components, h1: H1}
}
