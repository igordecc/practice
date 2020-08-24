package main

import (
	"fmt"
)

func main() {
	def_int()
	def_array()
	def_slice()
}

func def_int() {
	var a int
	a = 123
	fmt.Println("int: ", a)
}

func def_array() {
	var a [5]int
	a[0] = 1
	a[3] = 2
	fmt.Println("array a:", a)

	b := [5]int{5,6,7,3,5}
	fmt.Println("array b:", b)
}

func def_slice(){
	b := []int{5,6,7,3,5}
	var x int = 0
	x, b = b[len(b)-1], b[:len(b)-1] 	// x = b.pop(); b[0:len] -whole slice; b[0:len-1] -slice without last el
	// b = append(b, 1)	// append element
	fmt.Println("slice b:", b, x)
}

// func def_struct() {
// 	var a string[string] {
// 		"python" : "backend"
// 		"js" : "frontend"
// 		"ts" : "frontend"
// 	}
// 	fmt.Println(a)
// }
