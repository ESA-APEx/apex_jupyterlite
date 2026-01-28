# APEx Jupyter Lite

Welcome to the APEx Jupyter Lite repository! This project provides a lightweight version of Jupyter Notebook that can be run directly in your web browser without the need for any server-side components.

## Installing Jupyter Lite
To install Jupyter Lite, please ensure that conda is installed on your system. You can download and install conda from [here](https://docs.conda.io/en/latest/miniconda.html). Once conda is installed, you can create a new environment and install Jupyter Lite by running the following commands in your terminal:


### Installing APEx kernel

The `environment.yml` file includes the necessary dependencies for the APEx kernel. However, to set up the full APEx Jupyter Lite environment, you need to install additional packages as shown below:

```bash
conda env create -f environment.yml python=3.12
conda activate apex-jupyter-lite
conda install micromamba -c conda-forge -y
pip install jupyterlab jupyterlite jupyterlite-xeus jupyter_server
```

## Starting Jupyter Lite
To start Jupyter Lite, simply run the following command in your terminal:

```bash
jupyter lite clean
jupyter lite build
jupyter lite serve
```

## Adding new packages
To add new packages to the APEx Jupyter Lite environment you can simply add them to the `environment.yml` file located in the root directory of this repository. After adding the desired packages, make sure to rebuild the Jupyter Lite environment to include the new packages.

