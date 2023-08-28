package main

import (
	"fmt"
	"os"
)

func main() {
	fmt.Println("VALUE: " + os.Getenv("DEST_IP"))
}
