package main

import (
	"fmt"
	"net/http"
	"os"
	"os/exec"
	"os/signal"
	"syscall"

	"github.com/labstack/echo/v4"
	"github.com/sirupsen/logrus"
)

func Save(c echo.Context) error {
	output, err := exec.Command("/bin/sh", "/root/fccp-simulation/goweb/save.sh").Output()
	if err != nil {
		logrus.Errorf("error in executing save.sh: %s", err.Error())

		return err
	}

	fmt.Println(string(output))

	return c.JSON(http.StatusOK, output)
}

func Load(c echo.Context) error {
	output, err := exec.Command("/bin/sh", "/root/fccp-simulation/goweb/load.sh").Output()
	if err != nil {
		logrus.Errorf("error in executing load.sh: %s", err.Error())

		return err
	}

	fmt.Println(string(output))

	return c.JSON(http.StatusOK, output)
}

func Log(c echo.Context) error {
	output, err := exec.Command("/bin/sh", "/root/fccp-simulation/goweb/log.sh").Output()
	if err != nil {
		logrus.Errorf("error in executing log.sh: %s", err.Error())

		return err
	}

	fmt.Println(string(output))

	return c.JSON(http.StatusOK, output)
}

func main() {
	e := echo.New()

	e.GET("/healthz", func(c echo.Context) error { return c.NoContent(http.StatusNoContent) })

	e.POST("/save", Save)
	e.POST("/load", Load)
	e.GET("/log", Log)


	go func() {
		if err := e.Start(":7677"); err != nil {
			logrus.Fatalf("failed to start http server: %s", err.Error())
		}
	}()

	signals := make(chan os.Signal, 1)
	done := make(chan bool, 1)

	signal.Notify(signals, syscall.SIGINT, syscall.SIGTERM)

	go func() {
		sig := <-signals
		logrus.Info("Signal received: ", sig)
		done <- true
	}()

	<-done
}
