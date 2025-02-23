export const lightTheme = {
    body: '#f5f5f5',
    text: '#4d4d4d',
    toggleBorder: '#FFF',
    background: '#363537',
    todo: {
        title: '#ead7d7',
        container: 'rgba(255, 255, 255, 1)',
        input: () => lightTheme.text,
        placeHolder: '#e6e6e9',
        item: () => lightTheme.text,
        itemCompleted: '#d9d9d9',
        border: '#ededed',
        borderContainer: '#e6e6e6',
        borderLink: '#e7e7e7',
        borderLinkActive: '#ccc',
        shadowFooter: '#f6f6f6',
        checkbox: 1,
        inputEdit: '#fff'
    }
}

export const darkTheme = {
    body: '#363537',
    text: '#a1a1a1',
    toggleBorder: '#7a7a7a',
    background: 'blue',
    todo: {
        title: 'rgba(97, 97, 97, 0.8)',
        container: 'rgba(45,44,46,0.93)',
        input: '#b4b4b4',
        placeHolder: '#4d4d4d',
        item: '#d9d9d9',
        itemCompleted: '#6e6e6e',
        border: '#393939',
        borderContainer: '#434343',
        borderLink: '#393939',
        borderLinkActive: '#494949',
        shadowFooter: '#292929',
        checkbox: 0.5,
        inputEdit: '#29282a',
        footerLink: '#777'
    }
}